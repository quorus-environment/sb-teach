import React, { useState } from "react"
import "./entry-test-question.css"
import { questions } from "../entry-test/entry-test"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../shared/ui/button/button"

export const EntryTestQuestion = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeAnswer, setActiveAnswer] = useState<null | number>(null)

  const question = questions.find((el) => el.id === id)
  const questionIndex = questions.findIndex((el) => el.id === id)

  const handleClick = () => {
    if (questionIndex === questions.length - 1) {
      navigate(`/test/entry/statistic`, { replace: true })
    } else {
      navigate(`/test/entry/${questions[questionIndex + 1].id}`)
    }
    setActiveAnswer(null)
  }

  const handleSetActive = (index: number) => {
    setActiveAnswer(index)
  }

  return (
    <div className="test-question__container">
      <p className="test-question__question--number">Вопрос {questionIndex}</p>
      <div className="test-question__question-container">
        <p className="test-question__question">{question?.question}</p>
      </div>
      <div className="test-question__answers-container">
        {question?.answers.map((answer, index) => (
          <Button
            key={index}
            onClick={() => handleSetActive(index)}
            extraClass={`test-question__answer ${
              index === activeAnswer ? "test-question__answer--active" : null
            }`}
          >
            {answer}
          </Button>
        ))}
      </div>
      {questionIndex + 1 !== questions.length ? (
        <Button onClick={handleClick}>Перейти к следующему</Button>
      ) : (
        <Button onClick={handleClick}>Завершить тест</Button>
      )}
    </div>
  )
}
