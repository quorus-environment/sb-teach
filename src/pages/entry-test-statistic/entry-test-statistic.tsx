import React, { useEffect, useState } from "react"
import {
  TAnswer,
  useQuestionStore,
} from "../../shared/stores/questions/lib/questions-store"
import { Chart } from "../../shared/components/chart/chart"
import "./entry-test-statistic.css"
import { Button } from "../../shared/ui/button/button"
import { AxiosResponse } from "axios"
import $api from "../../shared/services/auth-service"

const getMark = async (answers: TAnswer[]): Promise<{ rating: number }> => {
  const { data } = await $api.post("/questions/validate_question", {
    answers,
  })
  return data
}

export const EntryTestStatistic = () => {
  const { answers, questions } = useQuestionStore((state) => ({
    questions: state.questions,
    answers: state.answers,
  }))
  const [loading, setLoading] = useState<boolean>(true)
  const [mark, setMark] = useState<number>(0)

  useEffect(() => {
    getMark(answers)
      .then((data) => setMark(data.rating))
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div>
      <h1 className="test-question-statistic__container">
        Результаты тестирования
      </h1>
      <p className="test-question-statistic__common-score">Общий балл:</p>
      <div className="test-question-statistic__scores-container">
        <Chart
          percentage={mark}
          extraClass={"test-question-statistic__chart"}
        />
      </div>
      <div className="buttton__container">
        <Button>Продолжить</Button>
      </div>
    </div>
  ) : (
    <div>loading...</div>
  )
}
