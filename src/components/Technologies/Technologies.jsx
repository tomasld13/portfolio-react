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
import {TbCSharp} from "react-icons/tb"
import {SiMicrosoftsqlserver} from "react-icons/si"

function Technologies() {
  return (
    <div style={{ textAlign: "center" }}>
      <p id="conocimientos">.</p>
      <h2 id="conocimientos_title">Conocimientos</h2>
      <div className="div-tech">
        <div
          class="card mb-3"
          id="js"
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiJavascript style={{ color: "#ead41c", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>JavaScript</h5>
        </div>
        <div
          class="card mb-3"
          id="cSharp"
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TbCSharp style={{ color: "#964d91", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>C#</h5>
        </div>
        <div
          class="card mb-3"
          id="py"
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiPython style={{ color: "#346d9d", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Python</h5>
        </div>
        <div
          class="card mb-3"
          id="java"
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiJava style={{ color: "#df2628", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Java</h5>
        </div>
        <div
          class="card mb-3"
          id="html" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiHtml5 style={{ color: "#d84924", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>HTML5</h5>
        </div>
        <div
          class="card mb-3"
          id="css" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiCss3 style={{ color: "#006ab1", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>CSS3</h5>
        </div>
        <div
          class="card mb-3"
          id="react" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiReact style={{ color: "#5ccfee", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>React</h5>
        </div>
        <div
          class="card mb-3"
          id="redux" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiRedux style={{ color: "#7046b2", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Redux</h5>
        </div>
        <div
          class="card mb-3"
          id="node" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiNodedotjs style={{ color: "#83ba00", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>NodeJS</h5>
        </div>
        <div
          class="card mb-3"
          id="express" 
          style={{
            backgroundColor: "transparent",
            border:"none",
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
          id="sequelize" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiSequelize style={{ color: "#4ea7db", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>Sequelize</h5>
        </div>
        <div
          class="card mb-3"
          id="mssql"
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiMicrosoftsqlserver style={{ color: "#a91d22", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>MSQL Server</h5>
        </div>
        <div
          class="card mb-3"
          id="postgresql" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiPostgresql style={{ color: "#2e5c8b", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>PostgreSQL</h5>
        </div>
        <div
          class="card mb-3"
          id="mysql" 
          style={{
            backgroundColor: "transparent",
            border:"none",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SiMysql style={{ color: "#005c83", fontSize: 100 }} />
          <h5 style={{ color: "white" }}>MySQL</h5>
        </div>
        
      </div>
    </div>
  );
}

export default Technologies;
