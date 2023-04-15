import "./header.css"

export const Header = () => {
  return (
    <div className={"header"}>
      <nav className={"header__navigation"}>
        <p>Тренировка</p>
      </nav>
      <div className={"header__personal"}>
        {"привет мир"}
        <img src={"#"} />
      </div>
    </div>
  )
}
