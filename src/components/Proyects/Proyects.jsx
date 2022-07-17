import React from "react";
import git from "../props/github-icon-b.png";
import psicoApp from "../props/psicoApp.png";
import spa from "../props/spa.png";
import viking from "../props/viking.png";
import "./Proyects.css";
function Proyects() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginBottom: 100,
      }}
    >
      <p id="proyectos"></p>
      <h2 id="title-proyects">Proyectos</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 600,
          borderRadius: 10,
        }}
      >
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
          style={{ width: 1200, height: 700 }}
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={viking}
                class="d-block"
                alt="..."
                style={{ height: 700, width: 1200, borderRadius: 20 }}
                className="img-carrousel"
              />
              <div class="carousel-caption d-none d-md-block">
                <a
                  className="a-carrousel"
                  href="https://github.com/tomasld13/TP-Programacion-JAVA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="text-carousel">
                    Castlevania, Barbarianna Viking Edition Juego 2D Java - UNGS
                  </h5>
                </a>
                <p className="text-carousel">
                  Puramente en lenguaje Java, el objetivo era reforzar el
                  conocimiento de la programación orientada a objetos. Realizado
                  en conjunto con dos compañeros.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={spa}
                class="d-block"
                alt="..."
                style={{ height: 700, width: 1200, borderRadius: 20 }}
                className="img-carrousel"
              />
              <div class="carousel-caption d-none d-md-block">
                <a
                  className="a-carrousel"
                  href="https://vg-henry.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="text-carousel">
                    Proyecto Individual "VideoGames Henry" - Bootcamp Henry
                  </h5>
                </a>
                <p className="text-carousel">
                  Simple Page Aplication realizada haciendo uso una API (Rawg).
                  JS+REACT+REDUX+NODE.JS+SEQUELIZE+POSTGRESQL
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={psicoApp}
                class="d-block"
                alt="..."
                style={{ height: 700, width: 1200, borderRadius: 20 }}
                className="img-carrousel"
              />
              <div class="carousel-caption d-none d-md-block">
                <a
                  className="a-carrousel"
                  href="https://psico-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="text-carousel">
                    Proyecto Grupal "PsicoApp" - Bootcamp Henry
                  </h5>
                </a>
                <p className="text-carousel">
                  Realizado en conjunto con 5 compañeros este proyecto es una
                  aplicación web con el objetivo de poder conectar a pacientes
                  con profesionales psicologos.
                  JS+REACT+REDUX+CHACKRA+TAILWIND+FIREBASE+NODE.JS+SEQUELIZE+SOCKET.IO+API-MERCADOPAGO+POSTGRESQL
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
