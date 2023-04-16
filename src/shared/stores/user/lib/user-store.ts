import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { TUserStore } from "../model/interface"
import { TSignIn, TSignUp } from "../../../services/auth-model"
import { AuthService } from "../../../services/auth-service"
import { Role } from "../../../model/role"

type Actions = {
  register: (user: TSignUp) => void
  logout: () => void
  cleanErrors: () => void
  login: (user: TSignIn) => void
  refresh: () => Promise<any>
}

const initialState: TUserStore = {
  isAuth: false,
  error: null,
  role: Role.jobOfferer,
  user_id: null,
  token: null,
  title: null,
  is_tested: false,
  spec: null,
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
        role: data.role,
        user_id: data.id,
        token: data.token,
        is_tested: data.is_tested,
        spec: data.spec,
        title: data.name,
      }))
      return data
    },
    register: async (user) => {
      const { data } = await AuthService.register(user)
      localStorage.setItem("token", data["token"])
      try {
        set(() => ({
          isAuth: true,
          user_id: data.id,
          title: data.name,
          role: data.role,
          token: data.token,
          is_tested: data.is_tested,
          spec: data.spec,
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
          user_id: data.id,
          role: data.role,
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
