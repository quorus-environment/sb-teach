import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { devtools, persist } from 'zustand/middleware'

import {TUser} from "../model/interface";
type Actions = {
    register: (user: any) => void;
    logout: () => void;
    cleanErrors: () => void;
    login: (user: any) => void
};


export const useAuthStore = create<TUser & Actions>()(
    devtools(immer(
        (set) => ({
            isAuth: false,
            error: null,
            loading: false,
            role: null,
            _id: null,
            register: async (user) => {
                const data = fetch("http://localhost:3000", user)
                set({loading: true})
                localStorage.setItem("accessToken", '' )
                try {
                    set(() => ({
                        isAuth: true,
                    }));
                    set({loading: false})
                } catch (error) {
                    set(() => ({ error: "", loading: false}));
                }
            },
            login: async(user) => {
                const data = fetch("http://localhost:3000", user)
                try {
                    set(() => ({
                        isAuth: true,
                    }));
                } catch (error) {
                    set(() => ({ error: "" }));
                }
            } ,
            logout: () => set(() => ({})),
            cleanErrors: () => set(() => ({ error: null })),
        })
    )));