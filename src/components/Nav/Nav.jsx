import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav
      class="navbar navbar-dark"
      id="nav"
      style={{ backgroundColor: "#212121" }}
      onClick={(e) => console.log(e.target)}
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="inicio"
          style={{ fontWeight: "bold", fontSize: 20 }}
        >
          Tomás Ledesma
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#inicio"
                style={{ fontWeight: "bold" }}
              >
                Incio
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#sobreMi"
                style={{ fontWeight: "bold" }}
              >
                Sobre Mí
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#estudios"
                style={{ fontWeight: "bold" }}
              >
                Estudios
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#conocimientos"
                style={{ fontWeight: "bold" }}
              >
                Conocimientos
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#proyectos"
                style={{ fontWeight: "bold" }}
              >
                Proyectos
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#contacto"
                style={{ fontWeight: "bold" }}
              >
                Contacto
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="https://docs.google.com/document/d/12bMH2j4alNBRt2Pkzvz8hNKUMmDqn4f8NKNpHsPZi80/edit?usp=sharing"
                target="_blank" 
                rel='noopener noreferrer'
                style={{ fontWeight: "bold" }}
              >
                Curriculum Vitae
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
