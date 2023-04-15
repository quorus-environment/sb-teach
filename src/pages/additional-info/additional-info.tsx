import React, { ChangeEvent, SyntheticEvent, useState } from "react"
import "./additional-info.css"
import $api from "../../shared/services/auth-service"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"
import { Button } from "../../shared/ui/button/button"

export const AdditionalInfo = () => {
  const [direction, setDirection] = useState<string | null>(null)
  const [framework, setFramework] = useState<string | null>(null)
  const [about, setAbout] = useState<string | null>(null)
  const { refresh } = useAuthStore((st) => ({
    refresh: st.refresh,
  }))
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    $api.post("/users/save_additional_info", {
      category: direction,
      framework,
      about,
    })
    refresh()
  }
  return (
    <div className="additional-info">
      <div className={"additional-info__container"}>
        <h1>Еще немного информации о вас</h1>
        <div className={"additional-info__choose-spec"}>
          <p>Выберите свое направление</p>
          <div className={"additional-info__selects"}>
            <select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setDirection(e.target.value)
              }
            >
              <option value="" disabled selected hidden>
                Профессия
              </option>
              <option value="frontend">frontend-разработка</option>
              <option value="backend">backend-разработка</option>
              <option value="fullstack">fullstack-разработка</option>
            </select>
            {(direction === "frontend" || direction === "fullstack") && (
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setFramework(e.target.value)
                }
              >
                <option value="" disabled selected hidden>
                  frontend framework
                </option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                <option value="svelte">Svelte</option>
              </select>
            )}
            {(direction === "backend" || direction === "fullstack") && (
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setFramework(e.target.value)
                }
              >
                <option value="" disabled selected hidden>
                  backend framework
                </option>
                <option value=".net">.net</option>
                <option value="node">node js</option>
                <option value="spring">spring</option>
                <option value="django">django</option>
                <option value="express">express</option>
              </select>
            )}
          </div>
        </div>
        <center>
          <Button onClick={onSubmit}>Сохранить</Button>
        </center>
      </div>
    </div>
  )
}
