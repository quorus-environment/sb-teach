import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { devtools, persist } from 'zustand/middleware'

import {TUserStore} from "../model/interface";
import {TSignIn, TSignUp} from "../../../services/auth-model";
import {AuthService} from "../../../services/auth-service";
type Actions = {
    register: (user: TSignUp) => void;
    logout: () => void;
    cleanErrors: () => void;
    login: (user: TSignIn) => void
};

const initialState = {
    isAuth: false,
    error: null,
    user: null,
    loading: false,
}

export const useAuthStore = create<TUserStore & Actions>()(
    devtools(immer(
        (set) => ({
            ...initialState,
            register: async (user) => {
                set({loading: true})
                const {data} = await AuthService.register(user)
                localStorage.setItem("accessToken", data["access_token"] )
                try {
                    set(() => ({
                        isAuth: true,
                        user: data.user
                    }));
                    set({loading: false})
                } catch (error) {
                    set(() => ({ error: "", loading: false}));
                }
            },

            login: async(user: TSignIn) => {
                const {data} = await AuthService.login(user)
                localStorage.setItem("accessToken", data["access_token"])
                try {
                    set(() => ({
                        isAuth: true,
                        user: data.user
                    }));
                } catch (error) {
                    set(() => ({ error: "" }));
                }
            } ,
            logout: () => {
                localStorage.setItem("accessToken", '')
                set(() => ({
                    ...initialState
                }))
            },

            cleanErrors: () => set(() => ({ error: null })),
        })
    )));