//import React from 'react'
import Header from './Header'
import ListReferenciador from './ListReferenciador';
import Reporte from './Reporte';
import React, { Component } from 'react'

class MainReferenciador extends Component{
    constructor(props){
        super(props);
        
        this.state={            
            documentUser: this.props.location.state.documentUser,
            referidosList: this.props.location.state.referidosList,
            idReferenciador: this.props.location.state.idReferenciador,
            objOrigen: this.props.location.state.objOrigen,
            tipoLead: this.props.location.state.tipoLead
        };


    }
    render(){
        return(
            <div>
            <Header>

            </Header>

            <Reporte></Reporte>
                
            </div>
    
        )
    }
}

export default MainReferenciador