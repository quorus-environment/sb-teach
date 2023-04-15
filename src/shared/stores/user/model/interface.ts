export type  TUser = {
    id: string,
    role: string,
    first_name: string,
    second_name: string | null
    last_name: string,
    email: string,
}


export type TUserStore = {
    user: Partial<TUser> | null
    isAuth: boolean,
    error: string | null
    loading: boolean,
}