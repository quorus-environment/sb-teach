import { List } from "../../widgets/list/list"
import { useEffect, useState } from "react"
import $api from "../../shared/services/auth-service"

export type Applicant = {
  id: string
  name: string
  email: string
  rating: number
  second_name: string | undefined
  category: "frontend" | "backend"
}

export const ApplicantList = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([])
  useEffect(() => {
    $api.post("/applicants/", {}).then((res) =>
      setApplicants(
        res.data.applicants.map((app: any) => ({
          id: app.id,
          name: app.first_name + " " + app.second_name,
          email: app.mail,
          rating: app.rating,
          category: app.specializations,
          second_name: app.last_name,
        })),
      ),
    )
  }, [])
  return <List applicants={applicants || []} />
}
