import {REMOVE_REFERENCIADO, ADD_REFERENCIADO,REFERENCIADOR_ACCESO} from './actionTypes'

// ACTIONS CREATORS
const removeReferenciados = (referenciado) => {
    return {
        type: REMOVE_REFERENCIADO,
        referenciado
    }
}

const addReferenciados = (referenciado) => {
    return {
        type: ADD_REFERENCIADO,
        referenciado
    }
}

const addReferenciadorAcceso = (referenciador) => {
    return{
        type: REFERENCIADOR_ACCESO,
        referenciador
    }
}

export {addReferenciadorAcceso, addReferenciados, removeReferenciados}