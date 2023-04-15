import "./app.css"
import { Login } from "../pages/login/login"
import { Routes, Route, Navigate } from "react-router-dom"
import { Register } from "../pages/register/register"
import { useAuthStore } from "../shared/stores/user/lib/user-store"
import React, { useEffect, useState } from "react"
import { ApplicantList } from "../pages/user-list/applicant-list"
import { Header } from "../widgets/header/header"
import { Profile } from "../pages/profile/profile"
import { EntryTestStatistic } from "../pages/entry-test-statistic/entry-test-statistic"
import { EntryTestQuestion } from "../pages/entry-test-question/entry-test-question"
import { EntryTest } from "../pages/entry-test/entry-test"

const App = () => {
  const [isFetched, setFetched] = useState<boolean>(false)
  const { user, refresh } = useAuthStore((st) => ({
    user: st.user,
    refresh: st.refresh,
  }))
  useEffect(() => {
    if (!user) {
      refresh().finally(() => setFetched(true))
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
      <div className={"wrapper"}>
        <Routes>
          <Route path="/test/entry" element={<EntryTest />}></Route>
          <Route path="/test/entry/:id" element={<EntryTestQuestion />}></Route>
          <Route
            path="/test/entry/statistic"
            element={<EntryTestStatistic />}
          ></Route>
          <Route path="/" element={<div>content</div>}></Route>
          <Route path="/train" element={<div>train</div>}></Route>
          <Route path="/find-mentor" element={<div>find mentor</div>}></Route>
          <Route path="/find-project" element={<div>find project</div>}></Route>
          <Route path="/applicant-list" element={<ApplicantList />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
