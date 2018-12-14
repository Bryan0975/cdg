import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import MainLanding from './../containers/Landing/MainLanding'
import MainReporte from './../containers/Dashboard/MainReporte'

import MainReferenciador from './../containers/Referenciador/MainReferenciador'
import { connect } from 'react-redux'
//import 'materialize-css';


//RETRIVES COMPONENTS BASED ON STATUS
const Status = function({code, children}){
	return(
		<Route render={function({staticContext}){
			if(staticContext)
				staticContext.status = code

			return children;
		}}/>
	)
}

//NOT-FOUND COMPONENT
const NotFound = function(){
	return(
		<Status code={404}>
			<div>
				<h2> Sorry, cannot find this page </h2>
			</div>
		</Status>
	)
}

class Main extends Component {
    render() {
        return(
            <div>                
                <Switch>
                     <Route exact path='/reporte' component={MainReporte}/>
                     <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Main