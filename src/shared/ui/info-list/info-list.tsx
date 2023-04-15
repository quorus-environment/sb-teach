import React, { FC } from "react"
import "./info-list.css"
import { Input } from "../input/input"

type TInfoList = {
  title: string
  list: Array<string>
}

export const InfoList: FC<TInfoList> = ({ list, title }) => {
  return (
    <div>
      <ul className={"infoList-data"}>
        <li className={"infoList-title"}>{title}</li>
        {list.map((el) => (
          <li>
            <Input value={el} extraClass={"info-list__button"}></Input>
          </li>
        ))}
      </ul>
    </div>
  )
}
