import React, { SyntheticEvent, useState } from "react"
import "./auth.css"
import { Input } from "../../shared/ui/input/input"
import { Button } from "../../shared/ui/button/button"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"
import { Link } from "react-router-dom"

export const Login = () => {
  const { login } = useAuthStore()
  const [loginError, setLoginError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    login({
      username,
      password,
    }).catch((e) => {
      setLoginError("Ошибка аутентификация")
      console.log(e)
    })
  }
  return (
    <div className={"auth-container"}>
      <form onSubmit={onSubmit} className={"auth-form"}>
        <h1 className={"app-title"}>Войти</h1>
        <Input
          type={"text"}
          value={username}
          onInput={() => setLoginError("")}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Имя"}
        ></Input>
        <Input
          onInput={() => setLoginError("")}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Пароль"}
        ></Input>
        {loginError.trim() && <p className={"error"}>{loginError}</p>}
        <Button
          disabled={![password, username].every((el) => el.trim() !== "")}
          type={"submit"}
        >
          Войти
        </Button>
        <Link className={"register-link"} to={"/register"}>
          Зарегестрироваться
        </Link>
      </form>
    </div>
  )
}
