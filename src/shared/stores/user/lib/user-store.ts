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
  loading: false,
  token: null,
}

export const useAuthStore = create<TUserStore & Actions>()(
  devtools((set) => ({
    ...initialState,
    refresh: async () => {
      set({ loading: true })
      const { data } = await AuthService.refresh().catch((e) => {
        console.log(e)
        if (e.response.status === 403) {
          set({ loading: false, error: "Не авторизован" })
        }
        throw Error("Не авторизован")
      })
      localStorage.setItem("token", data["token"])
      set(() => ({
        isAuth: true,
        user: data.id,
        token: data.token,
        loading: false,
      }))
    },
    register: async (user) => {
      set({ loading: true })
      const { data } = await AuthService.register(user)
      localStorage.setItem("token", data["token"])
      try {
        set(() => ({
          isAuth: true,
          user: data.id,
          token: data.token,
        }))
        set({ loading: false })
      } catch (error) {
        set(() => ({ error: "", loading: false }))
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
