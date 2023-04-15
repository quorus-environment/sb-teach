import React, { ChangeEvent, useState } from "react"
import "./additional-info.css"

export const AdditionalInfo = () => {
  const [direction, setDirection] = useState<string | null>(null)
  const [frontend, setFrontend] = useState<string | null>(null)
  const [backend, setBackend] = useState<string | null>(null)
  return (
    <div className="additional-info__container">
      <h1>Еще немного информации о вас</h1>
      <div>
        <p>Выберите свое направление*</p>
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
              setFrontend(e.target.value)
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
              setBackend(e.target.value)
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
  )
}
