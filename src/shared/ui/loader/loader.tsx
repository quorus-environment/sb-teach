import React, { FC } from "react"
import "./loader.css"

type TLoader = {
  type?: "loader" | "app-loader"
}
export const Loader: FC<TLoader> = ({ type = "loader" }) => {
  return <div className={type}></div>
}
