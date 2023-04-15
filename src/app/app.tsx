import "./app.css"
import { Login } from "../pages/auth/login"
import { Routes, Route, Navigate } from "react-router-dom"
import { Register } from "../pages/register/register"
import { useAuthStore } from "../shared/stores/user/lib/user-store"
import React, { useEffect, useState } from "react"
import { ApplicantList } from "../pages/user-list/applicant-list"
import { Header } from "../widgets/header/header"

const App = () => {
  const [isFetched, setFetched] = useState<boolean>(false)
  const { user, refresh } = useAuthStore((st) => ({
    user: st.user,
    refresh: st.refresh,
  }))
  useEffect(() => {
    if (!user) {
      refresh().then(() => setFetched(true))
    }
  }, [])
  if (!isFetched) {
    return <div>loading...</div>
  }
  if (!user) {
    return (
      <div className={"app"}>
        <Routes>
          <Route path="/sign-in" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<Navigate to="/sign-in" />}></Route>
        </Routes>
      </div>
    )
  }

  return (
    <div className={"app"}>
      <Header />
      <Routes>
        <Route path="/" element={<div>content</div>}></Route>
        <Route path="/applicant-list" element={<ApplicantList />}></Route>
        <Route path="*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    </div>
  )
}

export default App
