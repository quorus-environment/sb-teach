import axios, { AxiosResponse } from "axios"
import { TResponseAuth, TSignIn, TSignUp } from "./auth-model"

export const API_URL = "http://localhost:8080/auth"

const $api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
})

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (!token) {
    return config
  }
  config.headers.Authorization = "Bearer " + token
  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalConfig = error.config
    if (
      error.response.status.code == 403 &&
      error.config &&
      !error.config._isRetry
    ) {
      try {
        const response = await axios.post(`${API_URL}/refresh`)
        localStorage.setItem("token", response.data.access_token)
        return $api.request(originalConfig)
      } catch {
        console.error("Произошла ошибка при обновлении токена")
      }
    }
    throw error
  },
)

export default $api

export class AuthService {
  static async login(form: TSignIn): Promise<AxiosResponse<TResponseAuth>> {
    return await $api.post<TResponseAuth>("/sign-in", form)
  }

  static async register(form: TSignUp): Promise<AxiosResponse<TResponseAuth>> {
    return await $api.post<TResponseAuth>("/sign-up", form)
  }

  static async refresh() {
    return await $api.post("/refresh")
  }
}
