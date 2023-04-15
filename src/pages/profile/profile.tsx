import React from "react"
import "./profile.css"
import { InfoList } from "../../shared/ui/info-list/info-list"
import { Button } from "../../shared/ui/button/button"

export const Profile = () => {
  return (
    <div className={"profile-container"}>
      <div className={"profile-row"}>
        <div className={"profile-image"}>
          <img
            src={
              "https://p.kindpng.com/picc/s/188-1884521_naruto-png-hd-background-naruto-black-and-white.png"
            }
          ></img>
          <p>Добавить фотографию</p>
        </div>
        <div className={"profile-info"}>
          <InfoList
            title={"Личные данные"}
            list={["Имя", "Фамилия", "Отчество", "Дата рождения"]}
          ></InfoList>
          <InfoList
            title={"Образование/резюме"}
            list={["Cсылка", "Ссылка", "Ссылка", "Ссылка"]}
          ></InfoList>
        </div>
      </div>
      <div className={"profile-row"}>
        <div className={"profile-status"}>
          <p className={"profile-profession"}>
            Профессия: Frontend-разработчик
          </p>
          <p className={"profile-rate"}>Текущий рейтинг: 76</p>
          <p>Обновить рейтинг</p>
        </div>
        <div className={"profile-about"}>
          <textarea
            className={"profile-textarea"}
            placeholder={"Расскажите о себе..."}
          ></textarea>
        </div>
      </div>
      <center>
        <Button extraClass={"profile-button"}>Сохранить изменения</Button>
      </center>
    </div>
  )
}
