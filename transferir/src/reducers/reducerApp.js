import { ADD_REFERENCIADO, REMOVE_REFERENCIADO,REFERENCIADOR_ACCESO } from './../actions/actionTypes'

export function reducerApp(state={
    listReferenciados : []
    },action) {
    switch(action.type){
        case 'ADD_REFERENCIADO':
        return {
            ...state,
            listReferenciados: state.listReferenciados.push(action.referenciado)
        }
        break;
        case 'REMOVE_REFERENCIADO':
        return {
            ...state,
            listReferenciados: state.listReferenciados.filter( element => element.id !== action.referenciado.id)
        }
        break;
        case REFERENCIADOR_ACCESO:
        return {
            ...state,
            referenciador: state.referenciador
        }
        break;
    }
    return state;
}