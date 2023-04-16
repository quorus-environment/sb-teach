import { useEffect, useState } from "react"
import $api from "../../shared/services/auth-service"
import { useNavigate } from "react-router-dom"

const Tech = (props: { id: string; title: string }) => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: 100,
        cursor: "pointer",
        width: 100,
        display: "grid",
        placeItems: "center",
        border: "1px solid black",
        userSelect: "none",
      }}
      onClick={() => navigate("/tech/" + props.id)}
    >
      <h2>{props.title}</h2>
    </div>
  )
}

export const Train = () => {
  const [techs, setTechs] = useState<
    { id: string; title: string; category: "frontend" | "backend" }[]
  >([])
  useEffect(() => {
    $api
      .get("http://localhost:8080/technology/get_technologies")
      .then((res) => setTechs(res.data.technologies))
  }, [])
  return (
    <div style={{ padding: 20 }}>
      <b>Frontend</b>
      <div style={{ display: "flex", gap: 10, marginBottom: 30 }}>
        {techs
          .filter((t) => t.category === "frontend")
          .map((tech) => (
            <Tech id={tech.id} title={tech.title} key={tech.id} />
          ))}
      </div>
      <b>Backend</b>
      {techs
        .filter((t) => t.category === "backend")
        .map((tech) => (
          <Tech id={tech.id} title={tech.title} key={tech.id} />
        ))}
    </div>
  )
}
