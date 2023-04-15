import { Applicant } from "../../pages/user-list/applicant-list"

export const List: React.FC<{ applicants: Applicant[] }> = ({ applicants }) => {
  return (
    <div>
      {applicants.map((appl) => (
        <div className={"applicant"}>{appl.name}</div>
      ))}
    </div>
  )
}
