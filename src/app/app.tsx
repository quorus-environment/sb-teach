import "./app.css"
import { Login } from "../pages/auth/login"
import { Routes, Route, Navigate } from "react-router-dom"
import { Register } from "../pages/register/register"
import { useAuthStore } from "../shared/stores/user/lib/user-store"
import { useEffect } from "react"
import authService, { AuthService } from "../shared/services/auth-service"
import { EntryTestStatistic } from "../pages/entry-test-statistic/entry-test-statistic"
import { EntryTestQuestion } from "../pages/entry-test-question/entry-test-question"
import { EntryTest } from "../pages/entry-test/entry-test"

const App = () => {
  const token = localStorage.getItem("token")
  const { user, refresh, isLoading } = useAuthStore((st) => ({
    user: st.user,
    refresh: st.refresh,
    isLoading: st.loading,
  }))
  useEffect(() => {
    refresh().then(console.log)
  }, [])
  if (isLoading) {
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

  return (
    <div className={"app"}>
      <Routes>
        <Route path="/test/entry" element={<EntryTest />}></Route>
        <Route path="/test/entry/:id" element={<EntryTestQuestion />}></Route>
        <Route
          path="/test/entry/statistic"
          element={<EntryTestStatistic />}
        ></Route>
        <Route path="/" element={<div>content</div>}></Route>
        <Route path="*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    </div>
  )
}

export default App
