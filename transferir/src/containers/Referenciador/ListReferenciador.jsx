import React, { Component } from 'react'
import { Row, Input, Modal, Col, Preloader } from 'react-materialize'
import { Link } from 'react-router-dom'
import store  from './../../config/store'
import { addReferenciados, removeReferenciados } from './../../actions/actionsApp'
import { verifyDNI, verifyName, verifyPhone, verifyEmail, onlyNumber } from './../../functions/Validation.js';
// import Referenciado from '../../components/Referenciado'
import ProductCheck from './../../components/Producto';
import ErrorText from './../../components/ErrorText';
import * as actionReferenciador from './../../actions/actionReferenciador.js';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import errorImg from './../../images/error-server.png'

var cont = 0;
const tipoLead = 'Referenciadores';

class ListReferenciador extends Component {
    constructor() {
        super();
        this.state = {
            listReferenciados:[
                {
                    id: 0,
                    isChecked:true,
                    document: '',
                    fullname:'',
                    phone:'',
                    email:'',
                    product:[],
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
            ],
            modaltext:'',
            showModal: false,
            showModalError: false,
            showPreloader: false
        }
        this.addReferenciado = this.addReferenciado.bind(this);
        this.removeReferenciado = this.removeReferenciado.bind(this);
        this.validateDNI = this.validateDNI.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePhone = this.validatePhone.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateChecked = this.validateChecked.bind(this);
        this.validateFormAll = this.validateFormAll.bind(this);
        this.registerReferenciados = this.registerReferenciados.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    componentDidMount() {
        console.log('init: ' , this.props);
        if(this.props.referenciadorAcceso.acceso != true){            
            window.location.assign("/");
        }  
    }
    //Function catch event of each input
    handleChange(i, event) {
        // let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        
        let value = event.target.value;
        this.setState({[event.target.id]:value});
    }
    removeReferenciado(event){
        var listTemp = this.state.listReferenciados.filter(element => element.id != event.target.id);
        
        this.setState({listReferenciados:listTemp});        
    }
    
    addReferenciado() {
        
        if (this.validateFormAll()){            
            var objTemp = {
                id: cont+1,
                isChecked:true,
                document: '',
                fullname:'',
                phone:'',
                email:'',
                product:[],
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
            this.setState({
                listReferenciados:this.state.listReferenciados,
            });

            cont++;
        }
     
    }

    validateDNI(posicion, event) {
        
        console.log('validateDNI nombre: ', this.props.nombreReferenciador);

        var TABKEY = 9;
        var isValidDigit = true;
        if(event.keyCode != TABKEY && event.keyCode != undefined) {
            isValidDigit = onlyNumber(event);
        }
        
        const isValid = verifyDNI(event,this.state['document'+posicion]);

        if(!isValid || !isValidDigit){
            this.state.listReferenciados[posicion].document = '';
            this.setState({
                ['errorDNI'+posicion]: 'DNI inválido',
                ['validDNI'+posicion]: false
            });        
        }else{  
            this.state.listReferenciados[posicion].document = this.state['document'+posicion];
            this.setState({
                ['errorDNI'+posicion]: '',
                ['validDNI'+posicion]: true
            }); 
        }


    }
    validateName(posicion, e){
        const valueName = this.state['fullname'+posicion];
        const isValid = verifyName(valueName);

        this.setState({
            ['errorName'+posicion]: isValid ? '' : 'Ingrese el nombre',
            ['validName'+posicion]: isValid
        });
         
        if(isValid === true){
            this.state.listReferenciados[posicion].fullname = valueName;
        }else{
            this.state.listReferenciados[posicion].fullname = '';
        }
    }

    validatePhone(posicion, event){
            var valuePhone = this.state['phone'+posicion];
            const isValid = verifyPhone(valuePhone);

            this.setState({
                ['errorPhone'+posicion]: isValid ? '':'Celular inválido',
                ['validPhone'+posicion]: isValid
            })  
            
            if(isValid === true){
                this.state.listReferenciados[posicion].phone = valuePhone;
            }else{
                this.state.listReferenciados[posicion].phone = '';
            }
    }

    validateEmail(posicion, event){     
            
            const valueEmail =  this.state['email'+posicion];

            const isValid = verifyEmail(valueEmail);

            this.setState({
                ['errorEmail'+posicion]: isValid ? '':'Email inválido',
                ['validEmail'+posicion]: isValid
            })

            if(isValid === true){
                this.state.listReferenciados[posicion].email = valueEmail;
            }else{
                this.state.listReferenciados[posicion].email = '';
            }
    
    }

    validateChecked(posicion,event) {
        let isValid=false;
        const arrayCheck = Array.prototype.slice.call(document.getElementsByName('product'+posicion));
        const arrProduct = arrayCheck.filter(e => e.checked).map(e => e.value);
        isValid = arrProduct.length != 0;

        console.log(arrProduct);
        return isValid;
    }

    validateCheckedEvent(posicion, event){

        const arrayCheck = Array.prototype.slice.call(document.getElementsByName('product'+posicion));
        const arrProduct = arrayCheck.filter(e => e.checked).map(e => e.value);

        this.state.listReferenciados[posicion].product = arrProduct;

        if(arrProduct.length > 0){
            this.setState({['errorCheck'+posicion]: ''});
        }
    }

    validateFormAll () {
        var estadoFinal = true;

        console.log('tamaño array', this.state.listReferenciados.length);

        this.state.listReferenciados.map((e,i) => {
            console.log('erroName: ' + this.state['validName'+e.id]);

           if(this.state['validName'+e.id]!==true){
                this.setState({
                    ['errorName'+e.id] : 'Ingrese el nombre',                    
                });           
                estadoFinal = false;
           }

           if(this.state['validPhone'+e.id]!==true){
                this.setState({
                    ['errorPhone'+e.id] : 'Ingrese el celular',                    
                });           
                estadoFinal = false;
            }
            
            if(this.state['validEmail'+e.id]!==true){
                this.setState({
                    ['errorEmail'+e.id] : 'Ingrese el email',                    
                });           
                estadoFinal = false;
            }

            if(this.state['validDNI'+e.id]!==true){
                this.setState({
                    ['errorDNI'+e.id] : 'Ingrese el DNI',                    
                });           
                estadoFinal = false;
           }
           
           if(e.product.length<= 0){
                this.setState({
                    ['errorCheck'+e.id] : 'Complete los datos y seleccione por lo menos un seguro',                    
                });           
                estadoFinal = false;
           }

        });

        console.log('estado validacion: ', estadoFinal);
        return estadoFinal;
    }
    resetState() {
        // this.state.listReferenciados.map((e)=>{
            // this.setState({ ['id'+e.id]: null });
            this.setState({ ['document'+cont]: '' });
            this.setState({ ['fullname'+cont]: '' });
            this.setState({ ['phone'+cont]: '' });
            this.setState({ ['email'+cont]: '' });
            this.setState({ ['product'+cont]: '' });
        // })
    }
    registerReferenciados(e) {
        e.preventDefault();
        
        if(this.validateFormAll()){
            
            const objOrigen = {
                origen: this.props.origenWeb.origen,
                origenCampania: this.props.origenWeb.origenCampania,
                origenContenido: this.props.origenWeb.origenContenido,
                origenMedio: this.props.origenWeb.origenMedio
            };  
            this.setState({showPreloader:true});
            this.props.actionReferenciador.registerLeads(this.state.listReferenciados, this.props.referenciadorAcceso.referenciador.idReferenciador, objOrigen, tipoLead).then((response) => {   
                console.log('registrar referenciadores: ', response);                
                cont = 0;           
                this.setState({showPreloader:false});
                
                if(response.codigoRespuesta === 1){

                    // console.log("this.state.listReferenciados.length: " , this.state.listReferenciados.length);
                    window.dataLayer.push({
                        'event': 'virtualEvent',
                        'category': 'Referenciar',
                        'action': this.state.listReferenciados.length,
                        'label': 'Ingreso Satisfactorio'
                    });
                    
                    this.setState({listReferenciados:[]}, () => {
                        this.setState({
                            listReferenciados:[{
                                id: 0,
                                document: '',
                                fullname:'',
                                phone:'',
                                email:'',
                                product:[],
                                errorDNI:'',
                                errorName:'',
                                errorPhone:'',
                                errorEmail:'',
                                errorCheck:'',
                                validDNI:false,
                                validName:false,
                                validPhone:false,
                                validEmail:false,
                                validCheck:false}]
                        
                        });
                    }); 
                    
                    this.setState({showModal:true});
                    //cuando la rpta del servidor es success
                }else{
                    this.setState({
                        showModalError:true,
                        modalText:'Ocurrio un error en el servidor al momento de registrar tus datos'
                    })
                    window.dataLayer.push({
                        'event': 'virtualEvent',
                        'category': 'Referenciar',
                        'action': 0,
                        'label': 'Error al registrar'
                    });
                }
            
            }).catch(err => {
                console.log(err);
                //Modal para mostrar errores de recursos, en modalText setear el error
                this.setState({
                    showModalError:true,
                    modalText:'Ocurrio un error en el servidor al momento de registrar tus datos'
                })
            });

        }else {
            this.setState({['errorCheck'+cont]: 'Complete los datos y seleccione por lo menos un seguro'});
            this.setState({showModal:false})
            return false;
        }
    }
//probando refresh
    render() {
        return (
            <div>
                <section id="referenciador">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 link">
                                <Link to='/referenciadores' id="btnBack"  className="link-back"><i className="material-icons">keyboard_arrow_left</i><span>Regresar</span></Link>
                            </div>
                            <div className="col s12">
                                <div className="title center">
                                    <h2 className="title__principal">¡Hola, <span className="title__user">{this.props.referenciadorAcceso.referenciador.nombreCompleto}</span>!</h2>
                                    <h3 className="title__subtext">Ingresa los datos de tu(s) referenciados</h3>
                                </div>
                                <form>
                                    { this.state.listReferenciados.map((elem,i) =>                                          
                                        <div id={'card'+elem.id} className="col s12 m10 offset-m1 referenciado" key={elem.id}>
                                        {i == 0 ? '':<a id={elem.id} className="btn_close" value="remove" onClick={this.removeReferenciado}>x</a>}
                                        <div className="referenciado__title">
                                            <h3>Referenciado {i+1}</h3>
                                        </div>
                                        <div className="referenciado__dates">
                                            {/* <div className="col s3 m3 left-align">
                                                <input name='doc' type='radio' id='radioDni' className='with-gap' value="dni"
                                                    onChange={this.handleChange.bind(this, i)}
                                                    onClick={this.resetInput}
                                                    checked={this.state.isChecked}/>
                                                <label htmlFor="radioDni">DNI</label>
                                            </div>
                                            <div className="col s6 m9 left-align">
                                                <input name='doc' type='radio' id='radioCarnet' className='with-gap' value="carnet"
                                                    onClick={this.resetInput}
                                                    onChange={ this.handleChange.bind(this, i)}/>
                                                <label htmlFor="radioCarnet">C.E.</label>
                                            </div> */}
                                            <div className="col s12 m6 campo">
                                                <Input type='text' name="document" label='DNI' className={(this.state['errorDNI'+elem.id] != '' && this.state['document'+elem.id] != undefined)? 'invalid':''}
                                                    onBlur={this.validateDNI.bind(this,i)}
                                                    onKeyDown={this.validateDNI.bind(this,i)}
                                                    onKeyUp={this.validateDNI.bind(this,i)}
                                                    maxLength="8"
                                                    id={"document"+i}
                                                    value={this.state[elem.id]}
                                                    onChange={this.handleChange.bind(this, i)}
                                                />
                                                <ErrorText errorText={this.state['errorDNI'+i]} />
                                            </div>
                                            <div className="col s12 m6 campo">
                                                <Input type='text' name="fullName" label='Nombres y Apellidos' className={this.state['errorName'+elem.id] != '' && this.state['fullname'+elem.id] != undefined ? 'invalid':''}
                                                    onBlur={this.validateName.bind(this,i)}
                                                    id={"fullname"+i}
                                                    value={this.state[elem.id]}
                                                    onChange={this.handleChange.bind(this, i)}
                                                    />
                                                <ErrorText errorText={this.state['errorName'+i]} />
                                            </div>
                        
                                            <div className="col s12 m6 campo">
                                                <Input type='text' name="phone" label='Celular' className={this.state['errorPhone'+elem.id] != '' && this.state['phone'+elem.id] != undefined ? 'invalid':''}
                                                    onBlur={this.validatePhone.bind(this,i)}
                                                    maxLength="9"
                                                    id={"phone"+i}
                                                    value={this.state[elem.id]}
                                                    onChange={this.handleChange.bind(this, i)}
                                                />
                                                <ErrorText errorText={this.state['errorPhone'+i]} />
                                            </div>
                        
                                            <div className="col s12 m6 campo">
                                                <Input type='email' name="email" label='Correo electrónico' className={this.state['errorEmail'+elem.id] != '' && this.state['email'+elem.id] != undefined ? 'invalid':''}
                                                    onBlur={this.validateEmail.bind(this,i)}
                                                    id={"email"+i}
                                                    value={this.state[elem.id]}
                                                    onChange={this.handleChange.bind(this, i)}
                                                />
                                                <ErrorText errorText={this.state['errorEmail'+i]} />
                                            </div>
                                            <div className="col s12 accurance">
                                                <p>¿Qué seguro le interesa a tu referenciado?</p>
                                                <ProductCheck prod="Vehicular" idProd={"vehicular"+i} nameProd={"product"+i} iconProd="icon-carrito" valueProd="1"
                                                              onChangeProd={this.handleChange.bind(this,i)}
                                                              onClickProd={this.validateCheckedEvent.bind(this,i)}
                                                              lblClass="lbl-vehicular"
                                                />
                                                <ProductCheck prod="Salud" idProd={"salud"+i} nameProd={"product"+i} iconProd="icon-salud" valueProd="2"
                                                              onChangeProd={this.handleChange.bind(this,i)}
                                                              onClickProd={this.validateCheckedEvent.bind(this,i)}
                                                />
                                                <ProductCheck prod="Hogar" idProd={"hogar"+i} nameProd={"product"+i} iconProd="icon-domi" valueProd="4"
                                                              onChangeProd={this.handleChange.bind(this,i)}
                                                              onClickProd={this.validateCheckedEvent.bind(this,i)}
                                                />
                                                <ProductCheck prod="Vida" idProd={"vida"+i} nameProd={"product"+i} iconProd="icon-vida" valueProd="3"
                                                              onChangeProd={this.handleChange.bind(this,i)}
                                                              onClickProd={this.validateCheckedEvent.bind(this,i)}
                                                />
                                                <ErrorText id={'errorCheck'+i} errorText={this.state['errorCheck'+i]} />
                                            </div>
                                        </div>
                                    </div>
                                    )}                                    
                                    <div className="col s12 offset-m1 calltoaction">
                                        <a className="btn-large calltoaction__btn--white" onClick={this.addReferenciado}>Añadir +</a>
                                    </div>
                                    <div className="col s12 calltoaction center">
                                        <hr/>
                                        <input className="btn-large calltoaction__btn--green" type="submit" value="Referenciar" onClick = {this.registerReferenciados}/>
                                    </div>
                                    <Modal id='modal-thankyou'
                                        open={this.state.showModal}
                                        actions={
                                            <div className="calltoaction center">
                                                <Link to="/referenciadores" className="btn-large calltoaction__btn--green waves-effect waves-light modal-action modal-close">Entendido</Link>
                                            </div>
                                        }>
                                        <h2 className="center">¡Muchas gracias!</h2>
                                        <p className="center">Los llamaremos ahora, recuerda que siempre podrás usar esta web para seguir referenciando.</p>
                                    </Modal>
                                    <Modal id='modal-error'
                                        open={this.state.showModalError}
                                        actions={
                                            <div className="calltoaction center">
                                                <Link to="/referenciadores/referenciador" className="btn-large calltoaction__btn--green waves-effect waves-light modal-action modal-close">Entendido</Link>
                                            </div>
                                        }>
                                        <img className="img-error" src={errorImg} alt="Icono de error"/>
                                        <h2 className="center">¡Lo sentimos!</h2>
                                        <p className="center">{this.state.modalText}</p>
                                    </Modal>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Col s={12} className="preloader center" style={{ display: this.state.showPreloader===true ? 'flex' : 'none' }}>
                    <Preloader size='medium' />
                </Col>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({   
    referenciadorAcceso: state.referenciadorAcceso,
    origenWeb: state.origenWebReducers 
});

const mapDispatchToProps = (dispatch) => {
    return {
        actionReferenciador: bindActionCreators(actionReferenciador, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListReferenciador);