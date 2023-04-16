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
import { Train } from "../pages/train/train"
import { TechPage } from "../pages/tech-page"
import { Role } from "../shared/model/role"
import { ApplicantList } from "../pages/user-list/applicant-list"

const App = () => {
  const [isFetched, setFetched] = useState<boolean>(false)
  const { user, refresh, spec, isTested, role } = useAuthStore((st) => ({
    user: st.user_id,
    refresh: st.refresh,
    isTested: st.is_tested,
    spec: st.spec,
    role: st.role,
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
        <div className={"wrapper"}>
          <Routes>
            <Route path="/additional-info" element={<AdditionalInfo />}></Route>
            <Route
              path="*"
              element={<Navigate to="/additional-info" />}
            ></Route>
          </Routes>
        </div>
      </div>
    )
  }
  if (!isTested && role?.includes(Role.applicant)) {
    return (
      <div className={"app"}>
        <div className={"wrapper"}>
          <Routes>
            <Route path="/test/entry" element={<EntryTest />}></Route>
            <Route
              path="/test/entry/:id"
              element={<EntryTestQuestion />}
            ></Route>
            <Route
              path="/test/entry/statistic"
              element={<EntryTestStatistic />}
            ></Route>
            <Route path="*" element={<Navigate to="/test/entry" />}></Route>
          </Routes>
        </div>
      </div>
    )
  }
  return (
    <div className={"app"}>
      <Header />
      <div className={"wrapper"}>
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/train" element={<Train />}></Route>
          <Route path="/find-project" element={<div>Find project</div>}></Route>
          <Route path="/applicant-list" element={<ApplicantList />}></Route>
          <Route path="/find-mentor" element={<div>Find mentor</div>}></Route>
          <Route path="/tech/:id" element={<TechPage />}></Route>

          <Route
            path="*"
            element={
              <Navigate
                to={role?.includes(Role.jobOfferer) ? "/applicant-list" : "/"}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
