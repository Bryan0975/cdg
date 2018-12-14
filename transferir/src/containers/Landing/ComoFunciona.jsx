import React from 'react'
// images
import imgWeb from './../../images/web.png'
import imgLike from './../../images/manito.png'
import imgBono from './../../images/bono.png'
import imgPerson from './../../images/personas.png'

const ComoFunciona = () => {
    return(
        <div>
            <section id="comoFunciona">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m10 offset-m1 title center">
                            <h3 className="title__subtext">¿CÓMO FUNCIONA?</h3>
                            <h2 className="title__principal">¡Es muy fácil! Cada vez que tu referenciado adquiera un seguro, tú ganas.</h2>
                        </div>
                    </div>
                    <div className="row item">
                        <div className="col m3 item__text center">
                            <div className="col s5 m12 img"><img src={imgPerson} alt="Paso 1 para referenciar" /></div>
                            <div className="col s7 m12">
                                <p><strong>01</strong></p>
                                <p>Cuando una persona de tu entorno te dice que quiere un seguro RIMAC</p>
                            </div>
                        </div>
                        <div className="col m3 item__text center">
                            <div className="col s5 m12 img"><img src={imgWeb} alt="Paso 2 para referenciar" /></div>
                            <div className="col s7 m12">
                                <p><strong>02</strong></p>
                                <p>Ingresa a esta web y escribe sus datos.<br/><strong> Tip</strong> ¡Puedes hacerlo cuantas veces quieras!</p>
                            </div>
                        </div>
                        <div className="col m3 item__text center">
                            <div className="col s5 m12 img"><img src={imgLike} alt="Paso 3 para referenciar" /></div>
                            <div className="col s7 m12">
                                <p><strong>03</strong></p>
                                <p>Si tu referenciado se convierte en cliente RIMAC,<br /> ¡Habrás ganado!</p>
                            </div>
                        </div>
                        <div className="col m3 item__text center">
                            <div className="col s5 m12 img"><img src={imgBono} alt="Paso 4 para referenciar" /></div>
                            <div className="col s7 m12">
                                <p><strong>04</strong></p>
                                <p><strong className="red-text">Una vez confirmado el pago de la primera cuota, </strong> recibirás un bono dentro de tu pago mensual.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ComoFunciona