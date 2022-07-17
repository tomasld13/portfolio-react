import React from "react";
import "./Technologies.css";
import { SiJavascript } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
function Technologies() {
  return (
    <div style={{ textAlign: "center" }}>
      <p id="conocimientos">.</p>
      <h2 id="conocimientos_title">Conocimientos</h2>
      <div className="div-tech">
      <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiJavascript style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>JavaScript</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiPython style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Python</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiJava style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Java</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiHtml5 style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>React</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiCss3 style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>React</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiReact style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>React</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiRedux style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Redux</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiNodedotjs style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>NodeJS</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiExpress style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Express</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiSequelize style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Sequelize</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiPostgresql style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>PostgreSQL</h5>
        </div>
        <div
          class="card mb-3"
          style={{
            backgroundColor: "#2c5547",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiMysql style={{ color: "white", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>MySQL</h5>
        </div>
        
      </div>
    </div>
  );
}

export default Technologies;
