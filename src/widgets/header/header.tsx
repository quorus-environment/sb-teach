import "./header.css"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"
import { Link } from "react-router-dom"
import { useMemo } from "react"
import { Role } from "../../shared/model/role"

export const Header = () => {
  const { role } = useAuthStore((st) => ({
    role: st.role,
  }))
  const roledLinks = useMemo(() => {
    if (role === Role.jobOfferer) {
      return [{ to: "/applicant-list", text: "Соискатели" }]
    }
    if (role === Role.applicant) {
      return [
        { to: "/train", text: "Тренироваться" },
        { to: "/find-project", text: "Найти проект" },
        { to: "/find-mentor", text: "Найти ментора" },
      ]
    }
  }, [])
  return (
    <div className={"header"}>
      <nav className={"header__navigation"}>
        {roledLinks?.map((link) => {
          return (
            <Link to={link.to}>
              <p>{link.text}</p>
            </Link>
          )
        })}
      </nav>
      <Link to={"/profile"}>
        <div className={"header__personal"}>
          {"Имя Фамилия"}
          <img src={"#"} />
        </div>
      </Link>
    </div>
  )
}
