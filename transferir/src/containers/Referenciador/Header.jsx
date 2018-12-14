import React from 'react'
//Images
import imgLogo from './../../images/logo.png'

const Header = () => {
    return(
        <header>
            <nav className="bg-red">
                <div className="container">
                    <div className="row">
                        <div className="nav-wrapper">
                            <a href="https://www.rimac.com.pe/" className="brand-logo">
                                <img src={imgLogo} alt="Logo Rimac Seguros" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header