import React from 'react'
import NavBar from '../Componentes/NavBar'
import './Contacto.css'
import Banner from '../Componentes/Banner'

const Contacto = () => {
    return (
        <>
            <NavBar />
            <Banner/>
            
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Contacto</h1>
            <div >
                <form
                    action='https://formspree.io/f/mdkovjyj'
                    className="fs-form"
                    target="_top"
                    method="POST"
                >
                    <div className="fs-field">
                        <label className="fs-label" htmlFor="name">Tu nombre</label>
                        <input className="fs-input" id="name" name="name" required />
                    </div>
                    <div className="fs-field">
                        <label className="fs-label" htmlFor="email">Email</label>
                        <input className="fs-input" id="email" name="email" required />
                        <p>
                            Esto me ayudará a responder a su consulta por correo electrónico.
                        </p>
                    </div>
                    <div className="fs-field">
                        <label className="fs-label" htmlFor="message">Mensaje</label>
                        <textarea
                            className="fs-textarea"
                            id="message"
                            name="message"
                            required
                        ></textarea>
                        <p className="fs-description">¿Qué te gustaría discutir?</p>
                    </div>
                    <div className="fs-button-group">
                        <button className="fs-button" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contacto