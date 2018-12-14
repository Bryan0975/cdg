import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Input, Col, Preloader} from 'react-materialize'
import Form from './Form'
import ListReferidos from './ListReferidos'
import store  from './../../config/store'
import * as actionLoading from './../../actions/actionLoading.js';
import * as actionReferenciador from './../../actions/actionReferenciador.js';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import { connect } from 'react-redux';
var cont = 0;
class Referenciar extends Component {
    constructor(props){
        super(props);

     //   const listaRefereridoResumida = this.obtenerReferidosUnico(this.props.referidosList);
        
        console.log('init: ' , this.props);
        this.state = {
            documentUser : this.props.documentUser,
            referidosList:this.props.referidosList,
            idReferenciador:this.props.idReferenciador,
            objOrigen:this.props.objOrigen,
            tipoLead:this.props.tipoLead,
            listaReferenciador:[],
            listReferenciados:[],
            showForm:false,
            prealoadingRefe:false
        }

        this.addReferido = this.addReferido.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
    }


    /*  obtenerReferidosUnico(listaReferidos){
        const groups = this.groupBy(listaReferidos,'numeroDocumento');
        listReturn=[];
        let referido ={
            fullName,
            dni,
            phone,
            products:[]
        }
        groups.foreach(function(item){
            item.foreach(function(e){
            })
            listReturn.push();
        })
    }*/

   /* groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          var key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
    }*/

    /*componentWillMount() {
        this.props.actionReferenciador.obtenerReferenciado(this.state.documentUser).then((response2) => {
            this.setState({ listReferenciados : [],
                referidosList:[],
                referidosList: [...response2]
                });
        });
    }*/
    
    
    handleShowForm(){
        this.setState({showForm:!this.state.showForm})
    }

    obtenerRef(){
        
    }
    addReferido (referido){
        
        this.setState({prealoadingRefe:true});
        var objTemp = {
            id: cont+1,
            isChecked:true,
            document: referido.document,
            fullname: referido.fullName,
            phone: referido.phone,
            email: referido.email,
            product: referido.products,
            errorDNI:'',
            errorName:'',
            errorPhone:'',
            errorEmail:'',
            errorCheck:'',
            validDNI:false,
            validName:false,
            validPhone:false,
            validEmail:false,
            validCheck:false
        }        
        this.state.listReferenciados.push(objTemp);

        this.props.actionReferenciador.registerListaReferenciados(this.state.listReferenciados,this.state.idReferenciador,this.state.objOrigen,this.state.tipoLead,this.state.documentUser);
        /* Estado Pendiente = 1  */ 
        referido.status=1;

        setTimeout(function(){
            this.props.actionReferenciador.obtenerReferenciado(this.state.documentUser).then((response2) => {
                this.setState({ listReferenciados : [],
                    referidosList:[],
                    referidosList: [...response2],
                    prealoadingRefe:false});
               
            });
        }.bind(this), 6000);
    }
    render(){
        console.log('referidosList',this.state.referidosList);
        const referidos = this.state.referidosList.map((e,i)=>{
            return (
                <div className="col s12 referidos-container" key={i}>
                    <ul className="col s9 l10">
                        <li className="col s12 l4">{e.fullName}</li>
                        <li className="col s12 l2">{e.phone}</li>
                        <li className="col s12 l4">{e.products=="1"?'VEHICULAR':e.products=="2"?'SALUD':e.products=="3"?'VIDA':e.products=="4"?'DOMICILIARIO':'----------'}</li>
                        <li className="col s12 l2">{e.date}</li>
                    </ul>
                    <ul className="col s3 l2">
                        <li><i className="icon-time"></i>{e.status==1?'No gestionado': e.status==2?'En gestión':e.status==3?'Agendado':e.status==4?'Ganado':e.status==5?'Emitido':'----------'}</li>
                    </ul>
                </div>
            )
        })
        return(
            <div>
            <section id="referenciador">
               <div className="container">
                    <div className="row">
                        <div className="col s12 link">
                            <Link to='/referenciadores' id="btnBack"  className="link-back"><i className="icon-back"></i><span>Regresar</span></Link>
                        </div>
                        <div className="col s12">
                            <div className="user">
                                <div className="user__face center">:D</div>
                                <h5 className="user__employe">COLABORADOR</h5>
                                <h5 className="user__name">{this.props.referenciadorAcceso.referenciador.nombreCompleto}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m6 l4 form-container">
                            <h5 className="col s12 form-title" onClick={this.handleShowForm}><i className={`icon-next hide-on-med-and-up ${this.state.showForm ?'active':''}`}></i>REFERENCIA A TUS AMIGOS</h5>
                            <Form registerReferido={this.addReferido} classForm={this.state.showForm ? '':'hide-on-small-only'}/>
                        </div>
                        <div className="col s12 m6 l8">
                            <ListReferidos referidos={referidos} cantidad={referidos.length}/>
                        </div>
                    </div>
                </div>
            </section>
            <Col s={12} className="preloader center" style={{ display: this.state.prealoadingRefe===true ? 'flex' : 'none' }}>
                <Preloader size='medium' />
            </Col>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({   
    referenciadorAcceso: state.referenciadorAcceso,
    origenWeb: state.origenWebReducers 
});

const mapDispatchToProps = (dispatch) => {
    return {
        actionLoading: bindActionCreators(actionLoading, dispatch),
        actionReferenciador: bindActionCreators(actionReferenciador, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Referenciar);