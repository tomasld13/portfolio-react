import React from 'react'
import "./Jobs.css";
import prosys from "../props/LOGO_PROSYS.png";

function Jobs() {
  return (
    <div className='div-jobs'>
        <div className='d-flex justify-content-center'>
            <h2 className='titulo'>Experiencia Laboral</h2>
        </div>
            <div className="cards-css">
            <div
              class="card border-secondary mb-3"
              id="ungs"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <img src={prosys} style={{backgroundColor: "white"}} id="img-prosys" class="card-img-top" alt="..." />
              <div class="card-body">
                <a
                  href="https://www.prosys.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="card-link"
                >
                  <h5 class="card-title">Prosys S.A.</h5>
                </a>
                <p class="card-text">
                Desempeño un puesto de desarrollador informático haciendo uso de tecnologias como: 
                C#, JavaScript, ASP.NET, Microsoft Visual Studio Code, Bases de datos relacionales, Microsoft
                Management Studio, Team Foundation y SQL Server. 
                <br/>
                Dentro de este puesto he adquirido experiencia respecto a Transact-SQL y en la creación de
                WebApps,Web Services y API REST siguiendo un patrón de diseño MVC.
                Además todo dentro de un esquema agil de trabajo de tipo Scrum.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Jobs