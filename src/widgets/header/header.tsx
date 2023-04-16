import "./header.css"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"
import { Link } from "react-router-dom"
import { useMemo } from "react"
import { Role } from "../../shared/model/role"
import { useCurrentRole } from "../../main"

export const Header = () => {
  const { role, name } = useAuthStore((st) => ({
    role: st.role,
    name: st.title,
  }))
  const { currentRole, setCurrentRole } = useCurrentRole()
  const roledLinks = useMemo(() => {
    if (currentRole === Role.jobOfferer) {
      return [{ to: "/applicant-list", text: "Соискатели" }]
    }
    if (currentRole === Role.applicant) {
      return [
        { to: "/train", text: "Тренироваться" },
        { to: "/find-project", text: "Найти проект" },
        { to: "/find-mentors", text: "Найти ментора" },
      ]
    }
  }, [currentRole])
  return (
    <div className={"header"}>
      <nav className={"header__navigation"}>
        {roledLinks?.map((link, i) => {
          return (
            <Link key={i} to={link.to}>
              <p>{link.text}</p>
            </Link>
          )
        })}
      </nav>
      {(role?.length || 0) > 1 && (
        <select
          onChange={(e) => {
            setCurrentRole(e.target.value as Role)
          }}
          value={currentRole as string}
        >
          {role?.map((r) => (
            <option value={r}>{r}</option>
          ))}
        </select>
      )}
      <Link to={"/profile"}>
        <div className={"header__personal"}>
          {name}
          <img
            height={32}
            width={32}
            style={{ borderRadius: "50%" }}
            src={
              "https://yakovgo.gosuslugi.ru/netcat_files/265/2549/headshot.jpg"
            }
          />
        </div>
      </Link>
    </div>
  )
}
