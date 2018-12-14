import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './config/store.js'
import { createStore } from 'redux'

import './css/materialize.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css.map';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css.map';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style-icon.css'
import './css/styles.css'



import Main from './containers/Main.js'
import registerServiceWorker from './registerServiceWorker';

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-KBJLVCK'
}
TagManager.initialize(tagManagerArgs);



const App = () =>{
    return (
        <BrowserRouter><Main /></BrowserRouter>        
    )
}
ReactDOM.render(
    <Provider store={store}>
        <App />
   </Provider>, document.getElementById('root')
);

