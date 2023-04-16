import React, { FC, useEffect, useState } from "react"
import "./entry-test.css"
import { Button } from "../../shared/ui/button/button"
import { useNavigate } from "react-router-dom"

export type TQuestion = {
  id: string
  type: string
  title: string
  answers: Array<string | number>
  answer: number
}

export const questions: Array<TQuestion> = [
  {
    id: "1",
    type: "React",
    title: "Бла-бла",
    answers: [1, 2, 3, 4],
    answer: 2,
  },
  { id: "2", type: "Js", title: "Ы-Ы", answers: [1, 2, 3, 4], answer: 1 },
  { id: "3", type: "React", title: "и-и", answers: [1, 2, 3, 4], answer: 3 },
]

export const EntryTest: FC = () => {
  const navigate = useNavigate()
  const [id, setId] = useState<string | number | null>(null)
  const handleClick = () => {
    if (id) {
      navigate(`/test/entry/${questions[0].id}`, { replace: true })
    }
  }
  useEffect(() => {
    setId(questions[0].id)
  })

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
