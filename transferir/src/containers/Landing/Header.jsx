import React, { Component } from 'react'
//Images
import imgLogo from './../../images/logo.png'
    
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idElement:''
        }
        this.scrollTo = this.scrollTo.bind(this);
    }
    scrollTo(e,element){
        e.preventDefault();
        document.getElementById(element).scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    render(){
        return(
        <header>
            <nav ref={this.props.refNav}>
                <div className="container">
                    <div className="row">
                        <div className="nav-wrapper">
                            <a href="https://www.rimac.com.pe/" className="brand-logo">
                                <img src={imgLogo} alt="Logo Rimac Seguros" />
                            </a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a onClick={e=>this.scrollTo(e,'programa')}>¿QUÉ ES?</a></li>
                                <li><a onClick={e=>this.scrollTo(e,'comoFunciona')}>¿CÓMO FUNCIONA?</a></li>
                                <li><a onClick={e=>this.scrollTo(e,'score')}>SCORE</a></li>
                                <li><a onClick={e=>this.scrollTo(e,'consultas')}>CONSULTAS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            
        </header>
        )}
}

export default Header