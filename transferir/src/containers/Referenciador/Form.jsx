import React, { Component } from 'react'
import { Row, Input, Modal, Col, Preloader } from 'react-materialize'
import { Link } from 'react-router-dom'
import store  from './../../config/store'
import { addReferenciados, removeReferenciados } from './../../actions/actionsApp'
import { verifyDNI,verifyCE, verifyName, verifyPhone, verifyEmail, onlyNumber, getDate } from '../../functions/Validation';
import CheckProduct from '../../components/CheckProduct';
import ErrorText from './../../components/ErrorText';
import * as actionReferenciador from './../../actions/actionReferenciador.js';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//Images
import errorImg from './../../images/error-server.png'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',            
            dni:'',
            ce:'',
            fullName:'',
            phone:'',
            email:'',
            products:[],
            documentType:'dni',
            validDni:true,
            validCe:false,
            validFullname:true,
            validPhone:true,
            validEmail:true,
            validCheck:false,
            showPreloader:false,
            errorText:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.registerReferenciados = this.registerReferenciados.bind(this)
        this.validateChecked = this.validateChecked.bind(this)
        this.resetState = this.resetState.bind(this)
    }
    handleChange(event){
        (event.target.type === 'checkbox' ) && this.validateChecked(event);
        // const {value,name} = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const {value,name} = event.target;
        this.setState((event.target.type == 'radio') ? {documentType: value} : {[name]: value});
        // this.setState({radioChecked:event.target.checked})
    }

    validateInput(e){
        this.setState({
            'dni':{validDni:verifyDNI(e.target.value)},
            'ce':{validCe: verifyCE(e.target.value)},
            'fullName':{validFullname: verifyName(e.target.value)},
            'phone':{validPhone: verifyPhone(e.target.value)},
            'email':{validEmail: verifyEmail(e.target.value)},
        }[e.target.name])
    }
    validateChecked(e) {
        const arrayCheck = Array.prototype.slice.call(document.getElementsByName('product'));
        const arrProductValue = arrayCheck.filter(e => e.checked).map(e => e.value);
        const arrProductName = arrayCheck.filter(e => e.checked).map(e => (e.id).toUpperCase());
        this.setState(arrProductName.length != 0 ?
            {validCheck:true,products:arrProductValue, errorText:''}:
            {validCheck:false,products:[], errorText:'Seleccione por lo menos un producto'})
    }

    loadReferenciados(e){
        
    }

    registerReferenciados(e) {
        e.preventDefault();
        if((this.state.dni != '' || this.state.ce != '') && this.state.fullName!= '' && this.state.phone!= '' && this.state.email!= ''){
            if((this.state.validDni || this.state.validCe) && this.state.validFullname && this.state.validPhone && this.state.validEmail && this.state.validCheck){

                // this.setState({showPreloader:true});
                // this.setState({errorText:''})
                
            //Cuando responde satisfactoriamente el servicio
                //this.setState({showPreloader:false});
                this.resetState();
                this.props.registerReferido({
                    fullName:this.state.fullName,
                    phone:this.state.phone,
                    products:this.state.products,
                    date:getDate(),
                    email:this.state.email,
                    status:'Pendiente',
                    document: this.state.dni,

                });
            }
        }else {
            this.setState({errorText:'Ingrese los datos obligatorios'})
        }
    }
    toggleClass(){

    }
    resetState(){
        this.setState({
            dni:'',
            ce:'',
            fullName:'',
            phone:'',
            email:'',
            products:[],
            errorText:''
        })
        // document.querySelectorAll('.campo label').forEach(e=>{e.classList.remove('active')})
        Array.prototype.forEach.call(document.querySelectorAll('.campo label'), function (e) {
            e.classList.remove('active');
        })
        var checks = Array.prototype.slice.call(document.getElementsByName('product'));
        // checks.forEach(element => {
        //     element.checked=false;
        // });
        Array.prototype.forEach.call(checks, function (element) {
            element.checked=false;
        })
    }
    
    render(){
        console.log('validchecked',this.state.validCheck)
        return(
            <form onSubmit={this.registerReferenciados} className={this.props.classForm}>                
                <div className="col s6 campo">
                    <input name='doc' type='radio' id='radioDni' className='with-gap' value="dni"
                        onChange={this.handleChange}
                        onClick={this.onClickRadio}
                        defaultChecked={true}/>
                    <label htmlFor="radioDni">DNI</label>
                </div>
                <div className="col s6 campo">
                    <input name='doc' type='radio' id='radioCarnet' className='with-gap' value="ce"
                        onChange={ this.handleChange}
                        onClick={this.onClickRadio}/>
                    <label htmlFor="radioCarnet">C.E.</label>
                </div>
                <div className="col s12 campo">
                    {this.state.documentType === "dni" ?
                        <Input id="dni" name="dni" label="DNI" maxLength={8} className={(this.state.validDni)? '':'invalid'}
                            onBlur={this.validateInput}
                            onKeyDown={this.validateDni}
                            onKeyUp={this.validateDni}
                            value={this.state.dni}
                            onChange={this.handleChange}
                        />
                        :
                        <Input id="ce" name="ce" label="Carnet Extranjería" maxLength={12}
                            onBlur={this.validateInput}
                            onKeyDown={this.validateCarnet}
                            onKeyUp={this.validateCarnet}
                            value={this.state.ce}
                            onChange={this.handleChange}
                        />
                    }
                    <ErrorText errorText={(this.state.validDni || this.state.ce) ? '':'Documento inválido'} />
                </div>
                <div className="col s12 campo">
                    <Input type='text' id="fullName" name="fullName" label='Nombres y Apellidos' className={this.state.validFullname ? '': 'invalid'}
                        onBlur={this.validateInput}
                        value={this.state.fullName}
                        onChange={this.handleChange}
                        />
                    <ErrorText errorText={this.state.validFullname ? '':'Ingrese correctamente el nombre'} />
                </div>
                <div className="col s12 campo">
                    <Input type='text' id="phone" name="phone" label='Celular' className={this.state.validPhone ? '':'invalid'}
                        onBlur={this.validateInput}
                        maxLength="9"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <ErrorText errorText={(this.state.validPhone) ? '':'Número de celular inválido'} />
                </div>
                <div className="col s12 campo">
                    <Input type='email' id="email" name="email" label='Correo electrónico' className={this.state.validEmail ? '' : 'invalid'}
                        onBlur={this.validateInput}
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <ErrorText errorText={this.state.validEmail ? '':'Correo electrónico inválido'} />
                </div>
                <div className="col s12 campo form-checkbox">
                    <p className="form-title">¿Qué seguro le interesa a tu referenciado?</p>
                    <CheckProduct prod="Seguro Vehicular" idProd="vehicular" nameProd="product" valueProd="1" onChangeProd={this.handleChange}/>
                    <CheckProduct prod="Seguro Domiciliario" idProd="domiciliario" nameProd="product" valueProd="4" onChangeProd={this.handleChange}/>
                    <CheckProduct prod="Seguro de Salud" idProd="salud" nameProd="product" valueProd="2" onChangeProd={this.handleChange}/>
                    <CheckProduct prod="Seguro de Vida Integral" idProd="vida" nameProd="product" valueProd="3" onChangeProd={this.handleChange}/>
                    <ErrorText errorText={this.state.errorText} />             
                </div>
                <div className="col s12 calltoaction">
                    <input className="btn-large calltoaction__btn--green" type="submit" value="Referenciar" onToggle={this.toggleClass}/>
                </div>
                <Col s={12} className="preloader center" style={{ display: this.state.showPreloader===true ? 'flex' : 'none' }}>
                    <Preloader size='medium' />
                </Col>
            </form>
        )}
}

export default Form