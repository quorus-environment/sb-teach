import "./app.css"
import { Auth } from "../pages/auth/auth"
import { Routes, Route, Navigate } from "react-router-dom"
import { EntryTest } from "../pages/entry-test/entry-test"
import { EntryTestQuestion } from "../pages/entry-test-question/entry-test-question"
import { EntryTestStatistic } from "../pages/entry-test-statistic/entry-test-statistic"

const App = () => {
  const token = localStorage.getItem("token")
  if (!token) {
    return (
      <div className="app" id="app">
        <Routes>
          <Route path="/sign-in" element={<Auth />}></Route>
          <Route path="*" element={<Navigate to="/sign-in" />}></Route>
          <Route path="/test/entry" element={<EntryTest />}></Route>
          <Route path="/test/entry/:id" element={<EntryTestQuestion />}></Route>
          <Route
            path="/test/entry/statistic"
            element={<EntryTestStatistic />}
          ></Route>
        </Routes>
      </div>
    )
  }

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<div>content</div>}></Route>
        <Route path="*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    </div>
  )
}

export default App
