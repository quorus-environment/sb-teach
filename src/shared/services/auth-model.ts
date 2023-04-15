import { TUser } from "../stores/user/model/interface"

export type TResponseAuth = {
  access_token: string
  user: TUser
}

export type TSignIn = {
  username: string
  password: string
}

export type TSignUp = {
  username: string
  password: string
  email: string
  phone: string
  first_name: string
  role: string
  last_name: string
  second_name: string | null
}
