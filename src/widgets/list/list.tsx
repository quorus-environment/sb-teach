import { Applicant } from "../../pages/user-list/applicant-list"
import "./list.css"

export const List: React.FC<{ applicants: Applicant[] }> = ({ applicants }) => {
  return (
    <div className={"list"}>
      {applicants.map((appl) => (
        <div className={"list_item"}>
          <div className={"list__left"}>
            <img
              className={"list__avatar"}
              src={
                "https://heinoldheating.com/wp-content/uploads/2020/07/IAFOR-Blank-Avatar-Image-1.jpg"
              }
            />
            <div className={"list__contact"}>
              <p className={"list__title"}>{appl.name}</p>
              <p style={{ fontSize: 14 }}>{appl.second_name}</p>
              <p style={{ fontSize: 14 }}>{appl.email}</p>
            </div>
          </div>
          <div className={"list__right"}>
            <p>{appl.category}</p>
            <div>{appl.rating}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
