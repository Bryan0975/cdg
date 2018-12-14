import React from 'react'
import {Row,Input} from 'react-materialize'
//Images
// import imgUser from './../../images/user.png'
import imgScore from './../../images/scoring.png'


const Score = () => {
    return(
        <div>
            <section id="score">
                <div className="container">
                    <div className="row">
                        <div className="col s12 title center">
                            <h3 className="title__subtext">SCORE</h3>
                            <h2 className="title__principal">¡Ellos ya han ganado!</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m8 l6 offset-m2 offset-l3">
                            <img className="responsive-img" src={imgScore} alt="Score de referenciados"/>
                        </div>
                        {/* <div className="col s12 m6 offset-m3 user">
                            <div className="col s3 user__photo">
                                <img className="responsive-img" src={imgUser} alt="Colaborador de Rimac" />
                            </div>
                            <div className="col s6 user__name center">
                                <h3>Mey Mendoza</h3>
                                <em>Asesora de Seguros</em><br/>
                                <em>Area de innovación</em>
                            </div>
                            <div className="col s3 user__score center">
                                <h2>39</h2>
                                <span>referen</span>
                            </div>
                        </div>
                        <div className="col s12 m6 offset-m3 user">
                            <div className="col s3 user__photo">
                                <img className="responsive-img" src={imgUser} alt="Colaborador de Rimac" />
                            </div>
                            <div className="col s6 user__name center">
                                <h3>Mey Mendoza</h3>
                                <em>Asesora de Seguros</em><br/>
                                <em>Area de innovación</em>
                            </div>
                            <div className="col s3 user__score center">
                                <h2>39</h2>
                                <span>referen</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Score