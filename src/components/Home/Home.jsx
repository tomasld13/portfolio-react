import React from "react";
import me from "../props/Profile-removebg-preview-modified-removebg-preview.png"
import "./Home.css";
function Home() {
  //const me = require("../props/me-remove.png");
  return (
    <div className="home" id="inicio">
      <div className="text">
        <h1>TOMÁS LEDESMA</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Hola, gracias por visitarme! Bienvenido a mi portfolio, en este vas a
          poder saber más sobre mí y ver mis proyectos.
        </p>
      </div>
      <div style={{display:"flex", justifyContent: "center"}}>
        <img src={me} alt="portrait_photo" className="picture"></img>
      </div>
    </div>
  );
}

export default Home;
