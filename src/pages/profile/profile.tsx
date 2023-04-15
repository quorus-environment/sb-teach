import React, { useEffect, useState } from "react"
import "./profile.css"
import { InfoList } from "../../shared/ui/info-list/info-list"
import { Button } from "../../shared/ui/button/button"
import { AuthService } from "../../shared/services/auth-service"
import { TProfileData } from "../../shared/services/auth-model"

export const rolesInterpretor: Record<string, string> = {
  applicant: "Соискатель",
}

export const Profile = () => {
  const [profileData, setProfileData] = useState<TProfileData | null>(null)
  useEffect(() => {
    AuthService.getProfileInfo().then(({ data }) => {
      setProfileData(data)
    })
  }, [])
  if (!profileData) return <div>loading...</div>
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
            list={[
              profileData.first_name,
              profileData.second_name,
              profileData.first_name,
              rolesInterpretor[profileData.role],
            ]}
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
