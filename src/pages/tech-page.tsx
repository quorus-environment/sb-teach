import { useEffect, useState } from "react"
import $api from "../shared/services/auth-service"
import { useParams } from "react-router-dom"
import { TQuestion } from "./entry-test/entry-test"

export const TechPage = () => {
  const { id } = useParams<{ id: string }>()
  const [questions, setQuestions] = useState<TQuestion[] | null>([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    $api
      .post("/questions/get_question_by_tech", { technology: id })
      .then((res) => setQuestions(res.data.questions))
      .finally(() => setLoading(false))
  }, [])
  if (isLoading) {
    return <p>loading...</p>
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
