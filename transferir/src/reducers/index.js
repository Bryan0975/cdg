import { combineReducers } from 'redux'
import {reducerApp} from './reducerApp'
import {referenciadorReducers} from './referenciadorReducers'
import {origenWebReducers} from './origenWebReducers'
import {loadingReducers} from './loadingReducers'

export default combineReducers({
    reducerApp:reducerApp,
    referenciadorAcceso: referenciadorReducers,
    origenWebReducers: origenWebReducers
})