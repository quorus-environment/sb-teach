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
              <p className={"list__title"}>age</p>
              <p className={"list__title"}>city</p>
              <p className={"list__title"}>работа/вуз</p>
            </div>
          </div>
          <div className={"list__right"}>
            <p>FrontEnd spec</p>
            <div>90</div>
          </div>
        </div>
      ))}
    </div>
  )
}
