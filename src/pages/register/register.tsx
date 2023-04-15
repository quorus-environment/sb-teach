import React, { SyntheticEvent, useState } from "react"
import "./register.css"
import { Input } from "../../shared/ui/input/input"
import { Button } from "../../shared/ui/button/button"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"
import { Role } from "../../shared/model/role"
import { Link } from "react-router-dom"

const roles = [
  {
    title: "Я соискатель",
    role: Role.applicant,
  },
  {
    title: "Я работодатель",
    role: Role.jobOfferer,
  },
  {
    title: "Я ментор",
    role: Role.mentor,
  },
]

export const Register = () => {
  const { register } = useAuthStore()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState<Role>(Role.applicant)
  const [lastName, setLastName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [email, setEmail] = useState("")
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    register({
      username,
      email,
      first_name: firstName,
      last_name: lastName,
      second_name: secondName,
      password,
      phone,
      role,
      invitations: [],
    })
  }
  return (
    <div className={"auth-container"}>
      <form onSubmit={onSubmit} className={"auth-form"}>
        <h1 className={"app-title"}>Регистрация</h1>
        <Input
          type={"text"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={"Фамилия"}
        ></Input>
        <Input
          type={"text"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={"Имя"}
        ></Input>
        <Input
          type={"text"}
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
          placeholder={"Отчество"}
        ></Input>
        <Input
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Имя пользователя"}
        ></Input>
        <Input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Почта"}
        ></Input>
        <Input
          type={"text"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={"Телефон"}
        ></Input>
        <Input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Пароль"}
        ></Input>
        <ul className={"auth-roles"}>
          {roles.map((el: any, i) => {
            return (
              <li
                key={i}
                className={`auth-role ${
                  el.role === role ? "auth-role_active" : ""
                }`}
                onClick={() => setRole(el.role)}
              >
                {el.title}
              </li>
            )
          })}
        </ul>
        <Button type={"submit"}>Зарегистрироваться</Button>
        <Link className={"login-link"} to={"/login"}>
          Есть аккаунт? Войти
        </Link>
      </form>
    </div>
  )
}
