import React, { useEffect, useState } from "react"
import { MentorsList } from "../../widgets/mentors-list/mentors-list"
import $api from "../../shared/services/auth-service"
import { Applicant } from "../user-list/applicant-list"

export const FindMentors = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([])
  useEffect(() => {
    $api.get("/applicants/find-mentors").then((res) =>
      setApplicants(
        res.data.mentors.map((app: any) => ({
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
  return <MentorsList applicants={applicants || []} />
}
