import React, { useEffect, useState } from "react"
import "./profile.css"
import { InfoList } from "../../shared/ui/info-list/info-list"
import { Button } from "../../shared/ui/button/button"
import { AuthService } from "../../shared/services/auth-service"
import { TProfileData } from "../../shared/services/auth-model"
import { useCurrentRole } from "../../main"
import { Role } from "../../shared/model/role"
import { Chart } from "../../shared/components/chart/chart"
import { Loader } from "../../shared/ui/loader/loader"

export const rolesInterpretor: Record<string, string> = {
  applicant: "Соискатель",
}

export const Profile = () => {
  const [profileData, setProfileData] = useState<TProfileData | null>(null)
  useEffect(() => {
    AuthService.getProfileInfo()
      .then(({ data }) => {
        setProfileData(data)
      })
      .catch((e) => console.log(e))
  }, [])

  const addPhoto = () => {}
  const { currentRole } = useCurrentRole()
  if (!profileData)
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader></Loader>
      </div>
    )

  return (
    <div className={"profile-container"}>
      <div className={"profile-row"}>
        <div className={"profile-image"}>
          <img
            src={
              "https://yakovgo.gosuslugi.ru/netcat_files/265/2549/headshot.jpg"
            }
          ></img>
          <p className={"profile-add-photo"} onClick={addPhoto}>
            Добавить фотографию
          </p>
        </div>
        <div className={"profile-info"}>
          <InfoList
            title={"Личные данные"}
            list={[
              profileData.first_name,
              profileData.second_name,
              profileData.first_name,
              rolesInterpretor[currentRole as Role],
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
          <div className={"profile-rate"}>
            <p>Текущий рейтинг:</p>
            <Chart
              percentage={profileData.rating || 0}
              extraClass={"profile-rate__chart"}
            />
          </div>
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
