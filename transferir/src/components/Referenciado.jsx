import React,{Component} from 'react';
import {Input} from 'react-materialize'
import ProductCheck from './../components/Producto'

class Referenciado extends Component{
    constructor(props){
        super(props);
        this.state = {
            referenciados:[
                {                
                    id: 0,
                    document: '',
                    fullname:'',
                    phone:'',
                    email:'',
                    checkedVehicular: false,
                    checkedSalud:false,
                    checkedVida:false,
                    checkedHogar:false
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.addReferenciado = this.addReferenciado.bind(this);
        this.removeReferenciado = this.removeReferenciado.bind(this);
    }
    handleChange(i, event) {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({[event.target.id]:value});
    }

    resetInputReferenciado = () =>{
        this.setState({
            document: '',
            fullname:'',
            phone:'',
            email:'',
            checkedVehicular: false,
            checkedSalud:false,
            checkedVida:false,
            checkedHogar:false
        })
    };

    addReferenciado(referenciado) {
        // return referenciado;
    }
    removeReferenciado(i){
    //     this.state.clients.splice(this.state.clients.indexOf(3),1);
    //    let idClient = this.state.clients.map((element)=> {
    //        return element.id;
    //    }).indexOf(2);
    //    if(idClient!= -1){
    //        console.log('indexof',this.state.clients.splice(idClient,1));
    //    }else {
    //        console.log('cliente ya eliminado',this.state.clients);
    //    }
   }

    render(){
        return (
            this.state.referenciados.map((elem,i) => {
            <div className="col s12 m10 offset-m1 referenciado" key={i}>
                <a className="btn_close" value="remove" onClick={this.addReferenciado(elem)}>save</a>
                <a className="btn_close" value="remove" onClick={this.removeReferenciado(elem)}>x</a>
                <div className="referenciado__title">
                    <h3>Referenciado {i+1}</h3>
                </div>
                <div className="referenciado__dates">
                    <div className="col s12 m6 campo">
                        <Input type='text' name="document" label='DNI' className='validate'
                            maxLength="8"
                            id={"document"+i}
                            value={this.state[elem.id]}
                            onChange={this.handleChange.bind(this, i)}/>
                        {/* <ErrorText errorText={this.state.errorDNI} /> */}
                    </div>
                    <div className="col s12 m6 campo">
                        <Input type='text' name="fullName" label='Nombres y Apellidos'
                            className='validate'
                            id={"fullname"+i}
                            value={this.state[elem.id]}
                            onChange={this.handleChange.bind(this, i)}/>
                        {/* <ErrorText errorText={this.state.errorName} /> */}
                    </div>

                    <div className="col s12 m6 campo">
                        <Input type='text' name="phone" label='Celular' className='validate'
                            maxLength="9"
                            id={"phone"+i}
                            value={this.state[elem.id]}
                            onChange={this.handleChange.bind(this, i)}/>
                        {/* <ErrorText errorText={this.state.errorPhone} /> */}
                    </div>

                    <div className="col s12 m6 campo">
                        <Input type='email' name="email" label='Correo electrónico'
                            className='validate'
                            id={"email"+i}
                            value={this.state[elem.id]}
                            onChange={this.handleChange.bind(this, i)}/>                            
                        {/* <ErrorText errorText={this.state.errorEmail} /> */}
                    </div>
                    <div className="accurance">
                        <p>¿Qué seguro le interesa a tu referenciado?</p>
                        <ProductCheck prod="Vehicular" idProd={"vehicular"+i} nameProd={"checkVehicular"+i} iconProd="icon-carrito" valueProd="1"
                                      checkedProd={this.state[elem.id]}
                                      onChangeProd={this.handleChange.bind(this,i)}
                                      lblClass="lbl-vehicular"/>
                        <ProductCheck prod="Salud" idProd={"salud"+i} nameProd={"checkSalud"+i} iconProd="icon-salud" valueProd="2"
                                      onChangeProd={this.handleChange.bind(this,i)}
                                      checkedProd={this.state[elem.id]}/>
                        <ProductCheck prod="Hogar" idProd={"hogar"+i} nameProd={"checkHogar"+1} iconProd="icon-domi" valueProd="4"
                                      onChangeProd={this.handleChange.bind(this,i)}
                                      checkedProd={this.state[elem.id]}/>
                        <ProductCheck prod="Vida" idProd={"vida"+i} nameProd={"checkVida"+1} iconProd="icon-vida" valueProd="3"
                                      checkedProd={this.state[elem.id]}
                                      onChangeProd={this.handleChange.bind(this,i)}/>
                    </div>
                </div>
            </div>
            })
        )
    }
}

export default Referenciado