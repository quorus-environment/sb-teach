import { Applicant } from "../../pages/user-list/applicant-list"
import "./mentors-list.css"
import { Button } from "../../shared/ui/button/button"

export const MentorsList: React.FC<{ applicants: Applicant[] }> = ({
  applicants,
}) => {
  return (
    <div className={"mentors-list"}>
      {applicants.map((appl) => (
        <div className={"mentors-list_item"}>
          <div className={"mentors-list__left"}>
            <img
              className={"mentors-list__avatar"}
              src={
                "https://heinoldheating.com/wp-content/uploads/2020/07/IAFOR-Blank-Avatar-Image-1.jpg"
              }
            />
            <div className={"mentors-list__contact"}>
              <p className={"mentors-list__title"}>{appl.name}</p>
              <p style={{ fontSize: 14 }}>{appl.second_name}</p>
              <p style={{ fontSize: 14 }}>{appl.email}</p>
            </div>
          </div>
          <div className={"mentors-list__right"}>
            <p>{appl.category}</p>
            <Button>Хочу на менторство</Button>
          </div>
        </div>
      ))}
    </div>
  )
}
