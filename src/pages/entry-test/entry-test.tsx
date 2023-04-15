import React, { FC, useEffect, useState } from "react"
import "./entry-test.css"
import { Button } from "../../shared/ui/button/button"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../shared/stores/user/lib/user-store"
import $api from "../../shared/services/auth-service"

export type TQuestion = {
  id: string
  title: string
  image: null
  question: string
  answers: Array<string | number>
  answer: number
}

export const questions: Array<TQuestion> = [
  {
    id: "1",
    type: "React",
    question: "Бла-бла",
    answers: [1, 2, 3, 4],
    answer: 2,
  },
  { id: "2", type: "Js", question: "Ы-Ы", answers: [1, 2, 3, 4], answer: 1 },
  { id: "3", type: "React", question: "и-и", answers: [1, 2, 3, 4], answer: 3 },
]

const getTech = (technology: string): {} => {}

export const EntryTest: FC = () => {
  const navigate = useNavigate()
  const { refresh } = useAuthStore()
  const [id, setId] = useState<string | number | null>(null)
  const handleClick = () => {
    if (id) {
      navigate(`/test/entry/${questions[0].id}`, { replace: true })
    }
  }
  useEffect(() => {
    refresh().then((data) => {
      $api.post("/questions/get_question_set", {
        technology: data.tech,
      }).then((res) => )
    })
    setId(questions[0].id)
  }, [])

  return (
    <div className="entry-test__container">
      <div className="entry-test__text-container">
        <h1 className="entry-test__title">Теперь определим ваш уровень</h1>
        <p className="entry-test__desc">
          Пройдите тестирование и в конце увидите свой уровень. На тест дается
          30 минут, будет 10 вопросов. Пройти тест можно повторно, но не ранее
          чем через 2 недели.
        </p>
      </div>
      <div className="entry-test__test-info">
        <h2 className="test-info__title">Frontend-разработчик</h2>
        <div className="test-info__details">
          <p className="test-info__text">30 минут</p>
          <p>10 вопросов</p>
        </div>
        <Button onClick={handleClick} extraClass={"entry-test__button"}>
          Начать тестирование
        </Button>
      </div>
    </div>
  )
}
