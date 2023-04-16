import { Role } from "../../../model/role"

export type TUser = {
  id: string
  role: string
  first_name: string
  second_name: string | null
  last_name: string
  email: string
}

export type TUserStore = {
  user_id: string | null
  role: Role[] | null
  isAuth: boolean
  error: string | null
  token: string | null
  title: string | null
  spec: Array<string> | null
  is_tested: boolean
}
