import { Applicant } from "../../pages/user-list/applicant-list"
import "./mentors-list.css"
import { Button } from "../../shared/ui/button/button"
import app from "../../app/app"

export function unsecuredCopyToClipboard(text: string) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  try {
    document.execCommand("copy")
  } catch (err) {
    console.error("Unable to copy to clipboard", err)
  }
  document.body.removeChild(textArea)
}

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
            <a href={`mailto:${appl.email}`} target={"_blank"}>
              <Button onClick={() => unsecuredCopyToClipboard(appl.email)}>
                Хочу на менторство
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
