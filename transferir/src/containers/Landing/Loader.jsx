import React, { Component } from 'react';

import imgLoader from './../../images/loader.png';

//sa
class Loader extends Component {

    render() {

        var { loading } = this.props;

        return (
            <div id="myLoading" className="modalLoad" style={{ display: loading ? 'block' : 'none' }}>
                <div className="logo-loader"><img className="preloader-img" src={imgLoader} alt="Rimac" /></div>
                <div id="status" className="preloader-status"></div>
            </div>
        );
    }
}

export default Loader