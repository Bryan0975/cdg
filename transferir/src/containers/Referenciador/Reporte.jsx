import React, { Component }  from 'react';
import { MDBDataTable } from 'mdbreact';
import * as actionReferenciador from './../../actions/actionReferenciador.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const styleTablaWidth = {
  width : '100',
  paddingTop: '80px !important'
}



class DatatablePage extends Component {
  constructor(props){
      super(props);
      this.state={
        data : {columns: [
          {
           label: 'idepar',
           field: 'idepar',
           sort: 'asc',
           width: 100
           },
 
         {
           label: 'idetippar',
           field: 'idetippar',
           sort: 'asc',
           width: 100
         },
    
     {
       label: 'codigo',
       field: 'codigo',
       sort: 'asc',
       width: 100
     },
     {
       label: 'abreviatura',
       field: 'abreviatura',
       sort: 'asc',
       width: 100
     },
     {
       label: 'tramainput',
       field: 'tramainput',
       sort: 'asc',
       width: 200
     },
     {
       label: 'tramaoutput',
       field: 'tramaoutput',
       sort: 'asc',
       width: 100
     },
     {
      label: 'fecCreacion',
      field: 'fecCreacion',
      sort: 'asc',
      width: 100
    },
    {
      label: 'usuModif',
      field: 'usuModif',
      sort: 'asc',
      width: 100
    },
    {
      label: 'fecModif',
      field: 'fecModif',
      sort: 'asc',
      width: 100
    },
     ],
       rows :[]
     }

      }


      this.obtenerReporteSoat = this.obtenerReporteSoat.bind(this);
  }
  handleChange(event){
      (event.target.type === 'checkbox' ) && this.validateChecked(event);
      // const {value,name} = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      const {value,name} = event.target;
      this.setState((event.target.type == 'radio') ? {documentType: value} : {[name]: value});
      // this.setState({radioChecked:event.target.checked})
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
                  //date:getDate(),
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
  obtenerReporteSoat(){
    /*this.props.actionReferenciador.obtenerReporteSoat().then((response) => { 
      this.setState({
        data : {columns: [
          {
           label: 'idepar',
           field: 'idepar',
           sort: 'asc',
           width: 100
           },
 
         {
           label: 'idetippar',
           field: 'idetippar',
           sort: 'asc',
           width: 100
         },
    
     {
       label: 'codigo',
       field: 'codigo',
       sort: 'asc',
       width: 100
     },
     {
       label: 'abreviatura',
       field: 'abreviatura',
       sort: 'asc',
       width: 100
     },
     {
       label: 'tramainput',
       field: 'tramainput',
       sort: 'asc',
       width: 200
     },
     {
       label: 'tramaoutput',
       field: 'tramaoutput',
       sort: 'asc',
       width: 100
     },
     {
      label: 'usuCreacion',
      field: 'usuCreacion',
      sort: 'asc',
      width: 100
    },
     {
      label: 'fecCreacion',
      field: 'fecCreacion',
      sort: 'asc',
      width: 100
    },
    {
      label: 'usuModif',
      field: 'usuModif',
      sort: 'asc',
      width: 100
    },
    {
      label: 'fecModif',
      field: 'fecModif',
      sort: 'asc',
      width: 100
    },
     ],
       rows :response.data
     }

      })

      
    })*/


  }
  
  render(){
      console.log('validchecked',this.state.validCheck)
      return(
      <div>
        <MDBDataTable  
          data={this.state.data}
          style={styleTablaWidth}/>

        <form onSubmit={this.obtenerReporteSoat} >                
          <div className="col s12 calltoaction">
            <input className="btn-large calltoaction__btn--green" type="submit" value="Buscar" onToggle={this.toggleClass}/>
          </div>
        </form>
      </div>
        
      )}
}

const mapStateToProps = (state) => ({   

});

const mapDispatchToProps = (dispatch) => {
  return {
      actionReferenciador: bindActionCreators(actionReferenciador, dispatch)
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(DatatablePage);