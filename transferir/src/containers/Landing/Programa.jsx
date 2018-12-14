import React from 'react'
import Promo from './../../components/Promo'
import imgPrograma from './../../images/img-programa.png'

const Programa = () => {
    return(
        <div>
            <section id="programa">
                <div className="container">
                    <div className="row">
                        {/* <Promo /> */}
                        <div className="col s12 m6 title">
                            <div className="title">
                                <h3 className="title__subtext">¿QUÉ ES EL PROGRAMA DE REFERENCIADOS?</h3>
                                <h2 className="title__principal">Es el programa que busca convertirte en embajador de RIMAC y que además te da ingresos extras.</h2>
                            </div>
                            <div className="checks">
                                <p><strong>Tu referenciado debe:</strong></p>
                                <ul>
                                    <li><i className="material-icons">check</i>Ser mayor de edad.</li>
                                    <li><i className="material-icons">check</i>Estar interesado en un seguro.</li>
                                    <li><i className="material-icons">check</i>Debe ser externo a RIMAC.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m6 right-align">
                            <img className="responsive-img" src={imgPrograma} alt="Programa de referenciadores" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Programa