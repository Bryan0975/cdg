import React, { Component } from 'react'
import { Row, Input, Modal, Col, Preloader } from 'react-materialize'
import { Link } from 'react-router-dom'
import store  from './../../config/store'
import { addReferenciados, removeReferenciados } from './../../actions/actionsApp'
import * as actionReferenciador from './../../actions/actionReferenciador.js';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ListReferidos extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="referidos">
                <div className="row">
                    <div className="referidos__header list">
                        <h4 className="col s12 l7 list__title">Tu lista de Referidos</h4>
                        <h5 className="col s12 l5 list__subtext">Vas <strong>{this.props.cantidad}</strong> Referidos a la fecha. {this.props.cantidad != 0 ? '¡Bien hecho! :D': '¡Empieza ya!'} </h5>
                    </div>
                </div>
                <div className="row referidos__body list">
                    {this.props.referidos.length != 0 ?
                        <div className="col s12 list__full">
                            <div className="title-container hide-on-med-and-down">
                                <ul className="col l10">
                                    <li className="col l4">NOMBRES Y APELLIDOS</li>
                                    <li className="col l2">CELULAR</li>
                                    <li className="col l4">SEGURO DE INTERÉS</li>
                                    <li className="col l2">FECHA REG.</li>
                                </ul>
                                <ul className="col l2 hide-on-med-and-down">
                                    <li className="col l2">ESTADO</li>
                                </ul>
                            </div>
                            {this.props.referidos}
                        </div>:
                        <div className="col s12 list__empty center">
                            <h2>:(</h2>
                            <p>Oh<br/>Aún no has referenciado a nadie</p>
                        </div>
                    }
                </div>
            </div>
        )}
}

export default ListReferidos