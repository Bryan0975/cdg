import React, { Component } from 'react'
import Header from './../Landing/Header'
import Banner from './../Landing/Banner'
import Programa from './../Landing/Programa'
import ComoFunciona from './../Landing/ComoFunciona'
import Score from './../Landing/Score'
import {Rules} from './../Landing/Rules'
import {Modal} from 'react-materialize'
import { getCookie, setCookie} from './../../functions/Validation'
import Consulta from './Consulta';

class MainLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:true,
            user:null
        }
        this.navbar = null;
        this.changeBackground = this.changeBackground.bind(this);
        this.checkCookie = this.checkCookie.bind(this);
    }
    changeBackground(node) {        
        window.onscroll = function () {
            var scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (scroll >= 500) {
                node.style.background = "#ec1f26";
            } else if (scroll < 700) {
                node.style.background = "#33ba99";
            }
        }
    }
    checkCookie() {
        var user = getCookie("username");
        
        if (user != "") {
            this.setState({showModal:false});
        } else {
            user = 'dni';
            this.setState({showModal:true});
            if (user != "" && user != null) {
                setCookie("username", user, 30);
            }
        }
    }
    componentDidMount() {        
        this.checkCookie();
        this.changeBackground(this.navbar);
    }
render() {   
        return(
            <div>
                {/* <Modal id='modal'
                    open={this.state.showModal}
                    actions={
                        <div className="calltoaction center">
                            <button className="btn-large calltoaction__btn--green waves-effect waves-light modal-action modal-close">Entendido</button>
                        </div>
                    }>
                    <h3>¡Estás en el lugar correcto!</h3>
                    <p>Esta es la nueva web de referenciadores Rimac, con los beneficios de siempre y muy pronto vendrán muchos más.</p>
                    <p>Cuéntale a tus amigos :)</p>
                </Modal> */}
                <Header refNav={elem=> this.navbar=elem}/>
                <Banner />
                <Programa />
                <ComoFunciona />
                <Score />
                <Rules />
                <Consulta />
            </div>
        )
    }
}

export default MainLanding