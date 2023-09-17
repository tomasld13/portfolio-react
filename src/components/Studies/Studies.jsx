import React from "react";
import "./Studies.css";
import ungs from "../props/ungs.jpg";
import henry from "../props/henryR.jpg";

function Studies() {
  return (
    <div className="div-about">
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
              <h5 class="card-title">Henry <br className="space-henry"/> <br className="space-henry"/> <br className="space-henry"/></h5>
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
  )
}

export default Studies