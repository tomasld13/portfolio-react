import React from "react";
import psicoApp from "../props/psicoApp.png";
import spa from "../props/spa.png";
import viking from "../props/viking.png";
import { AiFillYoutube } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import "./Proyects.css";
function Proyects() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginBottom: "200px",
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
          style={{ height: 800, width: 1400 }}
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
                style={{ height: 800, width: 1400 }}
                className="img-carrousel"
              />
              <div>
                <div class="carousel-caption d-md-block">
                  <h5 className="text-carousel">
                    Castlevania, Barbarianna Viking Edition Juego 2D Java - UNGS
                  </h5>
                  <p className="text-carousel">
                    Puramente en lenguaje Java, el objetivo era reforzar el
                    conocimiento de la programación orientada a objetos.
                    Realizado en conjunto con dos compañeros.
                  </p>
                  <a
                    className="a-carrousel"
                    href="https://github.com/tomasld13/TP-Programacion-JAVA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
                <h5 className="text-carousel-externo">
                  Castlevania, Barbarianna Viking Edition Juego 2D Java - UNGS
                </h5>
                <p className="text-carousel-externo">
                  Puramente en lenguaje Java, el objetivo era reforzar el
                  conocimiento de la programación orientada a objetos. Realizado
                  en conjunto con dos compañeros.
                </p>
                <div className="svg-carousel-externo">
                  <a
                    className="a-carrousel-externo"
                    href="https://github.com/tomasld13/TP-Programacion-JAVA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img
                src={spa}
                class="d-block"
                alt="..."
                style={{ height: 800, width: 1400 }}
                className="img-carrousel"
              />
              <div>
                <div class="carousel-caption d-md-block">
                  <h5 className="text-carousel">
                    Proyecto Individual "VideoGames Henry" - Bootcamp Henry
                  </h5>
                  <p className="text-carousel">
                    Simple Page Aplication realizada haciendo uso una API
                    (Rawg).
                    <br />
                    JS REACT REDUX NODE.JS SEQUELIZE POSTGRESQL
                  </p>
                  <a
                    className="a-carrousel"
                    href="https://github.com/tomasld13/vg-henry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a
                    className="a-carrousel"
                    href="https://vg-henry.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorld />
                  </a>
                </div>
              </div>
              <h5 className="text-carousel-externo">
                Proyecto Individual "VideoGames Henry" - Bootcamp Henry
              </h5>
              <p className="text-carousel-externo">
                Simple Page Aplication realizada haciendo uso una API (Rawg).
                <br />
                JavaScript REACT REDUX NODE.JS SEQUELIZE POSTGRESQL
              </p>
              <div className="svg-carousel-externo">
                <a
                  className="a-carrousel-externo"
                  href="https://github.com/tomasld13/vg-henry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  className="a-carrousel-externo"
                  href="https://vg-henry.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld />
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={psicoApp}
                class="d-block"
                alt="..."
                style={{ height: 800, width: 1400 }}
                className="img-carrousel"
              />
              <div>
                <div class="carousel-caption d-md-block">
                  <h5 className="text-carousel">
                    Proyecto Grupal "PsicoApp" - Bootcamp Henry
                  </h5>
                  <p className="text-carousel">
                    Realizado en equipo este proyecto es una aplicación web con
                    el objetivo de poder conectar a pacientes con profesionales
                    de la psicología.
                    <br />
                    JavaScript REACT REDUX CHACKRA TAILWIND FIREBASE NODE.JS
                    SEQUELIZE SOCKET.IO API_MERCADOPAGO POSTGRESQL
                  </p>
                  <a
                    className="a-carrousel"
                    href="https://github.com/tomasld13/PF-psicoApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a
                    className="a-carrousel"
                    href="https://psico-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbWorld />
                  </a>
                  <a
                    className="a-carrousel"
                    href="https://www.youtube.com/watch?v=XdjU3AbXr80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillYoutube />
                  </a>
                </div>
              </div>
              <h5 className="text-carousel-externo">
                Proyecto Grupal "PsicoApp" - Bootcamp Henry
              </h5>
              <p className="text-carousel-externo">
                Realizado en equipo, este proyecto es una aplicación web con el
                objetivo de poder conectar a pacientes con profesionales
                psicologos.
                <br />
                JavaScript REACT REDUX CHAKRA TAILWIND FIREBASE NODE.JS
                SEQUELIZE SOCKET.IO API_MERCADOPAGO POSTGRESQL
              </p>
              <div className="svg-carousel-externo">
                <a
                  className="a-carrousel-externo"
                  href="https://github.com/tomasld13/PF-psicoApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  className="a-carrousel-externo"
                  href="https://psico-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld />
                </a>
                <a
                  className="a-carrousel-externo"
                  href="https://dms.licdn.com/playlist/C4D05AQFIn1DwZyf2OQ/mp4-720p-30fp-crf28/0/1658765765076?e=1659740400&v=beta&t=s8bP3l3UYbGBfup6veYbwYoLOsKVWdvRoDcQvfrFW_w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube />
                </a>
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
