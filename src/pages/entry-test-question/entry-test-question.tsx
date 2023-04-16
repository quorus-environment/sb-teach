import React, { useState } from "react"
import "./entry-test-question.css"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../shared/ui/button/button"
import {
  TAnswer,
  useQuestionStore,
} from "../../shared/stores/questions/lib/questions-store"
import { TQuestion } from "../entry-test/entry-test"
import $api from "../../shared/services/auth-service"
import { AxiosResponse } from "axios"

export const EntryTestQuestion = () => {
  const { questions, addAnswer } = useQuestionStore((state) => ({
    questions: state.questions as Array<TQuestion>,
    addAnswer: state.addAnswer,
  }))
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeAnswer, setActiveAnswer] = useState<null | number>(null)

  const question = questions.find((el) => el.id === id)
  const questionIndex = questions.findIndex((el) => el.id === id)

  const handleClick = async () => {
    if (questionIndex === questions.length - 1) {
      navigate(`/test/entry/statistic`, { replace: true })
    } else {
      navigate(`/test/entry/${questions[questionIndex + 1].id}`)
    }
    addAnswer({ answer: `${activeAnswer}`, uuid: question?.id as string })
    setActiveAnswer(null)
  }

  const handleSetActive = (index: number) => {
    setActiveAnswer(index)
  }

  return (
    <div className="test-question__container">
      <p className="test-question__question--number">Вопрос {questionIndex}</p>
      <div className="test-question__question-container">
        <p className="test-question__question">{question?.title}</p>
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
        <div className="test-question__submit-container">
          <Button onClick={handleClick}>Перейти к следующему</Button>
        </div>
      ) : (
        <div className="test-question__submit-container">
          <Button onClick={handleClick}>Завершить тест</Button>
        </div>
      )}
    </div>
  )
}
