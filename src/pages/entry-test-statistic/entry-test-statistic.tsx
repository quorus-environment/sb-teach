import React from "react"
import { useQuestionStore } from "../../shared/stores/questions/lib/questions-store"
import { Chart } from "../../shared/components/chart/chart"
import "./entry-test-statistic.css"
import { Button } from "../../shared/ui/button/button"

const percentage = [82, 57, 74]

export const EntryTestStatistic = () => {
  const { answers, questions } = useQuestionStore((state) => ({
    questions: state.questions,
    answers: state.answers,
  }))
  console.log(answers)
  return (
    <div>
      <h1 className="test-question-statistic__container">
        Результаты тестирования:
      </h1>
      <p className="test-question-statistic__common-score">Общий балл: 81</p>
      <div className="test-question-statistic__scores-container">
        {percentage.map((element) => {
          return (
            <div className="test-question-statistic__score">
              <p className="test-question-statistic__score--text">Предмет</p>
              <Chart percentage={element} />
            </div>
          )
        })}
      </div>
      <div className="buttton__container">
        <Button>Продолжить</Button>
      </div>
    </div>
  )
}
