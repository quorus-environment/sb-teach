import React, { ChangeEvent, useState } from "react"

export const AdditionalInfo = () => {
  const [direction, setDirection] = useState(null)
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
          <option value="frontend">frontend-разработка</option>
          <option value="backend-">backend-разработка</option>
          <option value="fullstack">fullstack-разработка</option>
        </select>
        <select>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </select>
        <select>
          <option value=".net">.net</option>
          <option value="node">node js</option>
          <option value="spring">spring</option>
          <option value="django">django</option>
          <option value="express">express</option>
        </select>
      </div>
    </div>
  )
}
