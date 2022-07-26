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
            fontSize: 25,
            "text-align": "left",
          }}
        >
          Soy de Argentina, provincia de Buenos Aires, hace dos años conocí la
          programación y me quedé fascinado con esta y por esto comencé cursando
          la Tecnicatura Universitaria en Informática, aprendiendo en esta
          Python y Java. Al mismo tiempo fui realizando algunos cursos en
          internet, hasta que me encontré con Henry, el cual ofrecía el
          aprendizaje de un stack solido de tecnologías para el desarrollo web,
          de una manera intensiva, por lo que este iba a agilizar mi inserción
          en el sector laboral.
          <br />
          Hoy en día, ya con el bootcamp finalizado y la carrera en proceso,
          estoy en busca de mi primera experiencia laboral en el sector IT. Con
          mucho entusiasmo, ganas de poner en práctica mis conocimientos, de
          seguir aprendiendo y creciendo profesionalmente.
          <br />
          Cuento con conocimientos Full Stack en el desarrollo web, me manejo
          tanto en la parte del FrontEnd como del BackEnd, aunque tengo
          preferencia en esta última área, me gusta mucho trabajar desde el lado
          del servidor y las bases de datos.
        </div>
        <a
          href="https://docs.google.com/document/d/12bMH2j4alNBRt2Pkzvz8hNKUMmDqn4f8NKNpHsPZi80/edit?usp=sharing"
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
              En estas carreras aprendí a programar en languajes como Python y
              Java, orientado a objetos.
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
