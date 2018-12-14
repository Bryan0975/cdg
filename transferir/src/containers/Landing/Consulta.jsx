import React from 'react'
import {Row,Input} from 'react-materialize'

const Consulta = () => {
    return(
        <section id="consultas">
            <div className="container">
                <div className="row">
                    <div className="col s12 m8 offset-m2 title center">
                        <h3 className="title__subtext">CONSULTAS</h3>
                    </div>
                    <div className="col s12 m8 offset-m2 contact center">
                        <h3>Si tienes alguna duda o sugerencia escríbenos a <span className="contact__email">renzo.cano@rimac.com.pe</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Consulta