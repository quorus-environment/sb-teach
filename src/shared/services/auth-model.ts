import { TUser } from "../stores/user/model/interface"

export type TResponseAuth = {
  token: string
  id: string
  role: string
  name: string
  is_tested: boolean
  spec: Array<string>
}

export type TSignIn = {
  username: string
  password: string
}

export type TProfileData = {
  first_name: string
  id: string
  image: string | null
  last_name: string
  role: string
  second_name: string
  username: string
}

export type TSignUp = {
  username: string
  password: string
  invitations: string[]
  email: string
  phone: string
  first_name: string
  role: string
  last_name: string
  second_name: string | null
}
