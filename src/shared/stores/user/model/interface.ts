export type TUser = {
  id: string
  role: string
  first_name: string
  second_name: string | null
  last_name: string
  email: string
}

export type TUserStore = {
  user: string | null
  isAuth: boolean
  error: string | null
  token: string | null
}
