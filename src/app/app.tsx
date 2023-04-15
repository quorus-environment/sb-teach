import "./app.css"
import { Login } from "../pages/login/login"
import { Routes, Route, Navigate } from "react-router-dom"
import { Register } from "../pages/register/register"
import { useAuthStore } from "../shared/stores/user/lib/user-store"
import React, { useEffect, useState } from "react"
import { EntryTestStatistic } from "../pages/entry-test-statistic/entry-test-statistic"
import { EntryTestQuestion } from "../pages/entry-test-question/entry-test-question"
import { EntryTest } from "../pages/entry-test/entry-test"
import { AdditionalInfo } from "../pages/additional-info/additional-info"
import { Header } from "../widgets/header/header"
import { Profile } from "../pages/profile/profile"

const spec: Array<string> = []

const App = () => {
  const [isFetched, setFetched] = useState<boolean>(false)
  const { user, refresh, spec, isTested } = useAuthStore((st) => ({
    user: st.user_id,
    refresh: st.refresh,
    isTested: st.is_tested,
    spec: st.spec,
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
          <Route></Route>
        </Routes>
      </div>
    )
  }
  if (spec && spec.length === 0) {
    return (
      <div className={"app"}>
        <Routes>
          <Route path="/additional-info" element={<AdditionalInfo />}></Route>
          <Route path="*" element={<Navigate to="/additional-info" />}></Route>
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
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<div>content</div>}></Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
