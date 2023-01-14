import React from "react";
import "./About.css";
import ungs from "../props/ungs.jpg";
import henry from "../props/henryR.jpg";

function About() {
  return (
    <div className="div-about">
      <p id="sobreMi"></p>
      <h2>Sobre Mí</h2>
      <div
        class="card"
        className="sobreMi"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          id="p-aboutMe"
          class="card-body"
          style={{
            color: "white",
            fontSize: 30,
            "text-align": "left",
          }}
        >
          👨‍💻Soy de Argentina, provincia de Buenos Aires, hace dos años conocí la programación
          y me quedé fascinado con esta, por esto comencé cursando la Tecnicatura Universitaria en 
          Informática, al mismo tiempo fui realizando algunos cursos en internet y también cursé el 
          bootcamp de desarrollo web full stack de Henry. 
          <br />
          <br />
          🚀Hoy en día, me encuentro trabajando como Técnico en Programación Informatica y cursando la 
          Técnicatura Universitaria en Informática.
        </div>
        <a
          href="https://www.canva.com/design/DAFPWL4DmDM/jGO2lC92AWOGuahY6vo91g/view?utm_content=DAFPWL4DmDM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            id="cv"
            type="button"
            class="btn btn-success"
            style={{
              backgroundColor: "#2c5547",
              border: "none",
              fontSize: 25,
              "text-align": "left",
              marginTop: "5%",
            }}
          >
            Curriculum Vitae
          </button>
        </a>
      </div>
      <p id="estudios"></p>
      <h2>Estudios</h2>
      <div className="cards-css">
        <div
          class="card border-secondary mb-3"
          id="ungs"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <img src={ungs} class="card-img-top" alt="..." />
          <div class="card-body">
            <a
              href="https://www.ungs.edu.ar/"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <h5 class="card-title">Universidad General Sarmiento</h5>
            </a>
            <p class="card-text">
              Soy estudiante avanzado de la Tecnicatura Universitaria en
              Informática y simultaneamente curso la Licenciatura en Sistemas.
              En estas carreras aprendí los fundamentos la de programación en Python; 
              POO, estructuras de datos, recursión, complejidad,diagramas UML y testing, en JAVA.
            </p>
          </div>
        </div>
        <div
          class="card border-secondary mb-3"
          id="henry"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <img src={henry} class="card-img-top" alt="..." />
          <div class="card-body">
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <h5 class="card-title">Henry</h5>
            </a>
            <p class="card-text">
              Henry es una academia digital la cual brinda distintos bootcamps.
              En este caso realicé el bootcamp de Desarrollo Full Stack, en el
              que aprendí tanto el Frontend como el Backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
