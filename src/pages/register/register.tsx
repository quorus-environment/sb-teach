import React, { SyntheticEvent, useState } from "react"
import "./register.css"
import { Input } from "../../shared/ui/input/input"
import { Button } from "../../shared/ui/button/button"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"

export const Register = () => {
  const { register } = useAuthStore()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("соискатель")
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
          <li className={"auth-role"}>Я соискатель</li>
          <li className={"auth-role"}>Я работодатель</li>
          <li className={"auth-role"}>Я ментор</li>
        </ul>
        <Button type={"submit"}>Зарегистрироваться</Button>
      </form>
    </div>
  )
}
