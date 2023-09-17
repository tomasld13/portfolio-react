import React from 'react'
import "./Contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import swal from 'sweetalert';
function Contact() {
  async function handleSubmit(event){
    event.preventDefault()
    const formSend = new FormData(event.target)
    console.log(formSend)
    const response = await fetch("https://formspree.io/f/xzbozenn",{
        method: "POST",
        body: formSend,
        headers: {
            'Accept': 'application/json'
        }
    })
    .catch(error => console.log(error))
    if (response.ok){
        event.target.reset()
        swal(
          "Mensaje enviado con éxito!",
          'Pronto te estaré respondiendo :)',
          'success'
      );
    }
  }
  return (
    <div className='div-contact'>
    <div id="contact" className="container contact-container">
      <p></p>
      <h1 id="contacto">Contacto</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/ptomasledesma/"
          className="contact youtube"
          target="_blank" 
          rel='noopener noreferrer'>
          <AiOutlineLinkedin className="icon"/>
          <h2>
            LinkedIn <span>Tomás Ledesma</span>
          </h2>
        </a>

        <a
          href="https://wa.me/+5491167267599"
          className="contact whatsapp"
          target="_blank" 
          rel='noopener noreferrer'>
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+54 9 11 6726-7599</span>
          </h2>
        </a>
        <a href="https://github.com/tomasld13" 
           target="_blank" 
           rel='noopener noreferrer' 
           className="contact instagram">
          <AiOutlineGithub className="icon" />
          <h2>
            GitHub <span>tomasld13</span>
          </h2>
        </a>
      </div>
      <div id="mail" className="container mail-container">
            <form id="formulario" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" id="Nombre" name="Nombre" required/>
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="text" id="Correo" name="Correo" required/>
                </div>
                <div id="div_textarea">
                    <label>Mensaje:</label>
                    <textarea name="Mensaje" rows="3" cols="50" required></textarea>
                </div>
                <div className="send">
                    <button type="submit" value="Enviar" id="send-input">Enviar</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}

export default Contact