import React, { FC } from "react"
import { Chart as ChartJS, ArcElement } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import "./chart.css"
ChartJS.register(ArcElement)

enum Colors {
  green = "rgba(0, 166, 88, 1)",
  yellow = "rgba(238, 242, 38, 1)",
  red = "rgba(239, 83, 49, 1)",
}

type TChart = {
  percentage: number
  extraClass?: string
}

export const Chart: FC<TChart> = ({ percentage, extraClass = "" }) => {
  const color: Colors =
    percentage >= 80
      ? Colors.green
      : percentage > 60
      ? Colors.yellow
      : Colors.red
  const data = {
    datasets: [
      {
        label: "%",
        data: [percentage, 100 - percentage],
        backgroundColor: [color, "rgba(255,255,255, 1)"],
        borderColor: [color, "rgba(255,255,255, 1)"],
      },
    ],
  }
  return (
    <div className={`chart--doughnut ${extraClass}`}>
      <Doughnut data={data} options={{ cutout: "90%" }} />
      <div className="chart--percentage">{`${percentage}%`}</div>
    </div>
  )
}
