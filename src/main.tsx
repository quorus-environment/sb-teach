import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/app"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { create } from "zustand"
import { Role } from "./shared/model/role"

type CurrentRoleStore = {
  currentRole: Role | null
  setCurrentRole: (v: Role) => void
}

export const useCurrentRole = create<CurrentRoleStore>((set) => ({
  currentRole: null,
  setCurrentRole: (v: Role) => set({ currentRole: v }),
}))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
