import { List } from "../../widgets/list/list"
import { useEffect, useState } from "react"

export type Applicant = {
  id: string
  name: string
  email: string
  rating: number
}

export const ApplicantList = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([])
  useEffect(() => {
    setApplicants([
      { id: "123", name: "Лена Сыс", email: "pavlovena@inbox.ru", rating: 80 },
      {
        id: "1233",
        name: "Лена Сыс 2",
        email: "pavlovena2@inbox.ru",
        rating: 80,
      },
    ])
  }, [])
  return <List applicants={applicants || []} />
}
