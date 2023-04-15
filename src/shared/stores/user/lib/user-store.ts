import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { TUserStore } from "../model/interface"
import { TSignIn, TSignUp } from "../../../services/auth-model"
import { AuthService } from "../../../services/auth-service"

type Actions = {
  register: (user: TSignUp) => void
  logout: () => void
  cleanErrors: () => void
  login: (user: TSignIn) => void
  refresh: () => Promise<void>
}

const initialState = {
  isAuth: false,
  error: null,
  user: null,
  token: null,
}

export const useAuthStore = create<TUserStore & Actions>()(
  devtools((set) => ({
    ...initialState,
    refresh: async () => {
      const { data } = await AuthService.refresh().catch((e) => {
        if (e.response.status === 403) {
          set({ error: "Не авторизован" })
          throw Error("Не авторизован")
        }
        set({ error: "Произошла ошибка" })
        throw Error("Произошла ошибка", e.response.status)
      })
      localStorage.setItem("token", data["token"])
      set(() => ({
        isAuth: true,
        user: data.id,
        token: data.token,
      }))
    },
    register: async (user) => {
      const { data } = await AuthService.register(user)
      localStorage.setItem("token", data["token"])
      try {
        set(() => ({
          isAuth: true,
          user: data.id,
          token: data.token,
        }))
      } catch (e: any) {
        if (e.response.status === 403) {
          set({ error: "Не авторизован" })
          throw Error("Не авторизован")
        }
        set({ error: "Произошла ошибка" })
        throw Error("Произошла ошибка", e.response.status)
      }
    },

    login: async (user: TSignIn) => {
      const { data } = await AuthService.login(user)
      localStorage.setItem("token", data["token"])
      try {
        set(() => ({
          isAuth: true,
          user: data.id,
          token: data.token,
        }))
      } catch (error) {
        set(() => ({ error: "" }))
      }
    },
    logout: () => {
      localStorage.setItem("token", "")
      set(() => ({
        ...initialState,
      }))
    },

    cleanErrors: () => set(() => ({ error: null })),
  })),
)
