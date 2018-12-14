import Alert from 'react-s-alert';
import apiReferenciador from './../api/apiReferenciador.js'

export function obtenerSuccess(data) {
    return { type: 'OBTENER', data };
}

export function obtReferenciadoSuccess(referenciador) {
    
    return { type: 'OBT_REFERENCIADOR_PARAM', 
             referenciador : referenciador,
             acceso:true};
}

export function obtenerUsuario(dni) {
    return function (dispatch) {
        return apiReferenciador.obtenerUsuario(dni).then(data => {
            
            if (data.codigoRespuesta === 1) {
                dispatch(
                    obtReferenciadoSuccess(data.cuerpo) 
                );
            }

            return data;
         
        }).catch(error => {
            throw (error);
        });
    }
}

export function obtenerReferenciado(dniReferenciador){
    return function (dispatch) {
        return apiReferenciador.obtenerReferenciado(dniReferenciador).then(data => {
            
            if (data.codigoRespuesta === 1) {
              
            }
            return data;
         
        }).catch(error => {
            throw (error);
        });
    }
}

export function obtenerReporteSoat(){
    return function (dispatch) {
        return apiReferenciador.obtenerReporteSoat().then(data => {
            
            
            return data;
         
        }).catch(error => {
            console.log(error); 
            throw (error);
        });
    }
}

export function registerLeads(listaLeads, idReferenciador, objOrigenWeb, tipoLead) {
    return function (dispatch) {
        return apiReferenciador.registerLeads(listaLeads, idReferenciador, objOrigenWeb, tipoLead).then(data => {
         
            return data;
         
        }).catch(error => {
            throw (error);
        });
    }
}

export function registerListaReferenciados(listaLeads, idReferenciador, objOrigenWeb, tipoLead,dniReferenciador) {
    return function (dispatch) {
        return apiReferenciador.registerListaReferenciados(listaLeads, idReferenciador, objOrigenWeb, tipoLead,dniReferenciador).then(data => {
         
            return data;
         
        }).catch(error => {
            throw (error);
        });
    }
}