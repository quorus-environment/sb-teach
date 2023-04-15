export type TResponseAuth = {
  accessToken: string
  id: string
  role: string
  data: any
}

export type TSignIn = {
  username: string
  password: string
}

export type TSignUp = {
  username: string
  password: string
  email: string
  first_name: string
  last_name: string
  second_name: string | null
}
