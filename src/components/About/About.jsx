import React from "react";
import "./About.css";
import ungs from "../props/ungs.jpg";
import henry from "../props/henryR.jpg";

function About() {
  return (
    <div className="div-about">
      {/*<div className='container-about'>
        <h2>Hola</h2>
        <p>Soy argentino me gusta la programacion etc..., adipisicing elit. Fugit, doloribus quod. Aperiam odio ab excepturi saepe natus! Quibusdam cupiditate qui quas accusantium aperiam explicabo provident consequatur, veniam, eaque ducimus magni?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti dolores dignissimos molestias quisquam magnam soluta nam quasi, velit voluptas possimus magni corporis repellat necessitatibus mollitia? Culpa dicta eligendi repellat!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur a quibusdam corporis deserunt accusantium quo cum, delectus repudiandae aut sint rerum quae! Consequatur, aperiam error. Numquam incidunt maiores totam optio!
        </p>
        <h3>Formación:</h3>
        <div className='container-info'>
        <p>Me encuentro estudiando la lic en sistemas en la ungs ... imagen de ungs</p>
        <img src={ungs} alt="UNGS Logo"></img>
        </div>
        <div className='container-info'>
        <p>Bootcamp de Henry es una academia digital la cual brinda distintos bootcamps. En este caso cursé el bootcamp de Desarrollo Full Stack, en el que vi tanto el front, con tecnologias como: HTML, CSS, React y Redux, como el back, con tecnologias como: Node.JS, Express, Sequielize, SQL.</p>
        <img src={henry} alt="SoyHenry Logo"></img>
        </div>
  </div>*/}
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
            fontWeight: "bold",
            fontSize: 20,
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
      </div>
      <p id="estudios"></p>
      <h2>Estudios</h2>
      <div className="cards-css">
      <div class="card border-secondary mb-3" id="ungs" style={{backgroundColor:"transparent", border:"none"}}>
        <img src={ungs} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Universidad General Sarmiento</h5>
          <p class="card-text">
            Soy estudiante avanzado de la Tecnicatura Universitaria en
            Informática y simultaneamente curso la Licenciatura en Sistemas. En
            estas carreras aprendí a programar en languajes como Python y Java,
            orientado a objetos.
          </p>
        </div>
        <div class="card-body">
          <a href="https://www.ungs.edu.ar/" class="card-link">
            UNGS
          </a>
        </div>
      </div>
      <div class="card border-secondary mb-3" id="henry" style={{backgroundColor:"transparent", border:"none"}}>
        <img src={henry} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Henry</h5>
          <p class="card-text">
            Henry es una academia digital la cual brinda distintos bootcamps. En
            este caso realicé el bootcamp de Desarrollo Full Stack, en el que aprendí
            tanto el Frontend como el Backend.
          </p>
        </div>
        <div class="card-body">
          <a href="https://www.soyhenry.com/" class="card-link">
            Henry
          </a>
        </div>
      </div>
      </div>
      {/*
      <div className="cards-css">
        <div class="card mb-3" className="card-css">
          <div class="row g-0 h-100">
            <div class="col-md-4">
              <img src={ungs} class="img-fluid rounded-start" alt="..." />
            </div>
            <div
              class="col-md-8"
              style={{
                color: "white",
                "text-align": "left",
              }}
            >
              <div class="card-body">
                <h5 class="card-title">
                  Universidad Nacional de General Sarmiento
                </h5>
                <p class="card-text">
                  Soy estudiante avanzado de la Tecnicatura Universitaria en
                  Informática y simultaneamente curso la Licenciatura en
                  Sistemas. En estas carreras aprendí a programar en languajes
                  como Python y Java, orientado a objetos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" className="card-css">
          <div class="row g-0 h-100">
            <div class="col-md-4">
              <img src={henry} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div
                class="card-body"
                style={{
                  color: "white",
                  "text-align": "left",
                }}
              >
                <h5 class="card-title">Henry Bootcamp Full Stack Developer</h5>
                <p class="card-text">
                  Henry es una academia digital la cual brinda distintos
                  bootcamps. En este caso realicé el bootcamp de Desarrollo Full
                  Stack, en el que ví tanto el Frontend como el Backend.
                </p>
              </div>
            </div>
          </div>
        </div>
              </div>*/}
    </div>
  );
}

export default About;
