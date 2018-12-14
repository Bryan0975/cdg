import React,{Component} from 'react'
import {Input, Col, Preloader} from 'react-materialize'
import ErrorText from './../../components/ErrorText'
//Images
import imgBanner from './../../images/banner.png'
//Functions
import { onlyNumber } from './../../functions/Validation';
import * as actionReferenciador from './../../actions/actionReferenciador.js';
import * as actionLoading from './../../actions/actionLoading.js';
import * as actionOrigenWeb from './../../actions/actionOrigenWeb.js';
import { addReferenciadorAcceso } from './../../actions/actionsApp';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store  from './../../config/store';

function obtenerValorParametro(sParametroNombre) {
    var sPaginaURL = window.location.search.substring(1);
    var sURLVariables = sPaginaURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParametro = sURLVariables[i].split('=');
        if (sParametro[0] === sParametroNombre) {
            return sParametro[1];
        }
    }
    return null;
}

class Banner extends Component{
    constructor(props){
        super(props);
        this.state={            
            // referenciador:{},
            option:'dni',
            documentUser:'',
            idReferenciador:'',
            referidosList:[],
            validDni: false,
            validCarnet:false,
           // objOrigen:[],
            error:'',
            showPreloader: false
        };
        this.handleCarnet = this.handleCarnet.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.mapDni = this.mapDni.bind(this);
        this.validateCarnet = this.validateCarnet.bind(this);
        this.validateDni = this.validateDni.bind(this);
        this.goLink = this.goLink.bind(this);
    }

    handleChange = (e) =>{this.setState({option: e.target.value});};

    mapDni = (e)=>{
        this.setState({documentUser: e.target.value});};

    handleCarnet = (e) =>{this.setState({documentUser: e.target.value});};

    resetInput = () =>{
        this.setState({documentUser: '', error:''})
    };

    validateDni =(e)=>{
        if(onlyNumber(e) || this.state.documentUser){
            (this.state.option === "dni" && this.state.documentUser.length !== 8) ? this.setState({validDni:false}) : this.setState({validDni:true,error:''});
        }
    };

    validateCarnet= (e) =>{
        (this.state.option === "carnet" && this.state.documentUser.length <= 1) ? this.setState({validCarnet:false}) : this.setState({validCarnet:true,error:''});
    };

    goLink =(e)=>{
        if(this.state.option === "dni"){
            if(this.state.validDni){
                this.setState({showPreloader:true}); 
                this.props.actionReferenciador.obtenerUsuario(this.state.documentUser).then((response) => {                   
                   
                    this.setState({showPreloader:false});
                    
                    var origen = '';
                    var origenCampania = '';
                    var origenContenido = '';
                    var origenMedio = '';

                    if (obtenerValorParametro('utm_source') != null) {
                        origen = obtenerValorParametro('utm_source');
                        origenCampania = obtenerValorParametro('utm_campaign');
                        origenContenido = obtenerValorParametro('utm_content');
                    } else if (obtenerValorParametro('origen_fuente') != null) {
                        origen = obtenerValorParametro('origen_fuente');
                    }

                    if (obtenerValorParametro('utm_medium') != null) {
                        origenMedio = obtenerValorParametro('utm_medium');
                    } else if (obtenerValorParametro('origen_medio') != null) {
                        origenMedio = obtenerValorParametro('origen_medio');
                    }

                    const objOrigen = {
                        origen: origen,
                        origenCampania: origenCampania,
                        origenContenido: origenContenido,
                        origenMedio: origenMedio
                    }

                  
                    
                    this.props.actionOrigenWeb.registrarOrigenWeb(objOrigen);
                    

                    if (response.codigoRespuesta != 1) {                        
                        this.setState({error:'No se encuentra registrado'});
                    }else {            
                        window.dataLayer.push({
                            'event': 'virtualEvent',
                            'category': 'Ingresar DNI',
                            'action': 'Clic botón - Empezar',
                            'label': 'Ingreso Satisfactorio'
                        }); 
                       // this.setState({idReferenciador:response.cuerpo.idReferenciador})
                        //this.state={dniReferemciador:this.state.documentUser}
                        this.props.actionReferenciador.obtenerReferenciado(this.state.documentUser).then((response2) => {
                            const referidosLista = response2;
                            const dniRef = this.state.documentUser;
                            this.props.history.push(
                                { 
                                    pathname:  "/referenciadores/referenciador", 
                                    state: {tipoLead:'Referenciadores', documentUser:dniRef,idReferenciador:response.cuerpo.idReferenciador,referidosList:referidosLista,objOrigen:objOrigen}
                                }
                            )
                        });  

                       /* this.props.history.push(
                            { 
                                pathname:  "/referenciadores/referenciador", 
                                state: {documentUser:'40943330',referidosList:this.state.referidosLista}
                            }
                        )*/
                       
                    }

                    }).catch(err => {
                        console.log(err);
                    }
                );
               
                
                
            }else{
                this.setState({error:'Ingresar DNI completo'});
            } 
        }
        else{
            if(this.state.validCarnet){
                this.props.actionReferenciador.obtenerUsuario(this.state.documentUser).then((response) => {
                    this.setState({showPreloader:false});
                    if (response.codigoRespuesta != 1) {                        
                        this.setState({error:'No se encuentra registrado'});
                    }else {
                        window.dataLayer.push({
                            'event': 'virtualEvent',
                            'category': 'Ingresar DNI',
                            'action': 'Clic botón - Empezar',
                            'label': 'Ingreso Satisfactorio'
                        }); 
                        this.props.history.push({ pathname:  "/referenciadores/referenciador" })
                       
                    }
                 }).catch(err => {
                    console.log(err);
                 }
                );
            }else{
                this.setState({error:'Ingresar C.E. completo'});
            } 
        }
    };

    render(){
        return(
            <div>
                <section id="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m7 l6">
                                <div className="title">
                                    <h1 className="title__principal">A RIMAC le va bien,</h1>
                                    <h2 className="title__subtext">y a ti también.</h2>
                                </div>
                                <div className="col m12 l10 datos">
                                    <p className="col s12 datos__title">Empieza a referenciar ingresando tus datos:</p>
                                    <form action="">
                                        <div className="col s3 m3 left-align">
                                            <input name='doc' type='radio' id='radioDni' className='with-gap' value="dni"
                                                   onChange={this.handleChange}
                                                   onClick={this.resetInput}
                                                   checked={this.state.option==='dni'}/>
                                            <label htmlFor="radioDni">DNI</label>
                                        </div>
                                        <div className="col s6 m9 left-align">
                                            <input name='doc' type='radio' id='radioCarnet' className='with-gap' value="carnet"
                                                   onClick={this.resetInput}
                                                   onChange={ this.handleChange}/>
                                            <label htmlFor="radioCarnet">C.E.</label>
                                        </div>
                                        <div className="col s12 m8 l7 campo">
                                            {this.state.option ==="dni" ?
                                                <Input id="dni" label={"Ingresa tu DNI"} maxLength={8} validate
                                                    onBlur={this.validateDni}
                                                    onKeyDown={this.validateDni}
                                                    onKeyUp={this.validateDni}
                                                    value={this.state.documentUser}
                                                    onChange={this.mapDni}
                                                />
                                                :
                                                <Input id="carnet" label={"Ingresa tu C.E."} maxLength={12} validate
                                                    onBlur={this.validateCarnet}
                                                    onKeyDown={this.validateCarnet}
                                                    onKeyUp={this.validateCarnet}
                                                    value={this.state.documentUser}
                                                    onChange={this.handleCarnet}
                                                />
                                            }
                                            <ErrorText errorText={this.state.error} />
                                        </div>
                                        <div className="col s12 m4 l5 calltoaction">
                                            <a id="btnReferenciar"  className="btn-large calltoaction__btn--green" onClick={this.goLink}>Empezar</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col s12 m5 l6 image-container">
                                <img className="responsive-img" src={imgBanner} alt="Web para referenciadores" />
                            </div>                            
                        </div>
                    </div>
                </section>
                <Col s={12} className="preloader center" style={{ display: this.state.showPreloader===true ? 'flex' : 'none' }}>
                    <Preloader size='medium' />
                </Col>
            </div>
        )
    }
}

// export default Banner;
const mapState = (state) => ({    
    
});

const mapDispatch = (dispatch) => {
    return {
        actionReferenciador: bindActionCreators(actionReferenciador, dispatch),
        actionLoading: bindActionCreators(actionLoading, dispatch),
        actionOrigenWeb : bindActionCreators(actionOrigenWeb, dispatch)
    };
};

export default withRouter(connect(mapState,mapDispatch)(Banner));