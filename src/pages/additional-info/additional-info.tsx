import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react"
import "./additional-info.css"
import $api from "../../shared/services/auth-service"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"
import { Button } from "../../shared/ui/button/button"

const getTechIds = async () => {
  const { data } = await $api.get("/technology/get_technologies")
  return data
}

type TTech = {
  category: string
  color: string
  id: string
  title: string
}

export const AdditionalInfo = () => {
  const [direction, setDirection] = useState<string | null>(null)
  const [framework, setFramework] = useState<string | null>(null)
  const [about, setAbout] = useState<string | null>(null)
  const [isLoaded, setLoaded] = useState<boolean>(false)

  const [frontendFrames, setFrontendFrames] = useState<TTech[] | null>(null)
  const [backendFrames, setBackendFrames] = useState<TTech[] | null>(null)

  useEffect(() => {
    const tech: Record<string, TTech[]> = {
      frontend: [],
      backend: [],
    }
    getTechIds()
      .then((res) => {
        res.technologies.forEach((element: TTech) => {
          if (element.category === "frontend") {
            tech.frontend.push(element)
          } else if (element.category === "backend") {
            tech.backend.push(element)
          }
        })
        setFrontendFrames(tech.frontend)
        setBackendFrames(tech.backend)
      })
      .finally(() => setLoaded(true))
  }, [])
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
    isLoaded && (
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
              </select>
              {direction === "frontend" && (
                <select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFramework(e.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    frontend framework
                  </option>
                  {frontendFrames?.map((element: any, index: any) => (
                    <option key={index} value={element.id}>
                      {element.title}
                    </option>
                  ))}
                </select>
              )}
              {direction === "backend" && (
                <select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFramework(e.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    backend framework
                  </option>
                  {backendFrames?.map((element: any, index: any) => (
                    <option key={index} value={element.id}>
                      {element.title}
                    </option>
                  ))}
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
  )
}
