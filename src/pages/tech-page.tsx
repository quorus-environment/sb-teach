import React, { useEffect, useState } from "react"
import $api from "../shared/services/auth-service"
import { useParams } from "react-router-dom"
import { TQuestion } from "./entry-test/entry-test"
import { Loader } from "../shared/ui/loader/loader"

export const TechPage = () => {
  const { id } = useParams<{ id: string }>()
  const [questions, setQuestions] = useState<TQuestion[] | null>([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    $api
      .post("/questions/get_question_by_tech", { technology: id })
      .then((res) => setQuestions(res.data.questions))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])
  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader></Loader>
      </div>
    )
  }
  return (
    <div>
      {questions?.length === 0 && <p>Вопросов по данной тематике нет</p>}
      {questions?.map((q) => {
        return <p>{q.title}</p>
      })}
    </div>
  )
}
