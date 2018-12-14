
import axios from 'axios'

const axiosReferenciador = axios.create({
    //PRD
    //baseURL: 'https://rdleuswapprod08.azurewebsites.net',
    baseURL: 'http://localhost:3003',
    //DEV

   // baseURL:  'https://cotiza-gen-backend.np.net',
    //baseURL: process.env.REACT_APP_BACKEND_URL,

    //baseURL: 'https://cotizador-vehicular-backend.azurewebsites.net',
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default 
    }
});



const axiosReferenciadorAWS = axios.create({

    baseURL:  'https://7ybf1c2tqf.execute-api.us-east-2.amazonaws.com/desa',
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default 
    }
});

class apiReferenciador {

   /* static obtenerUsuario(dni) {
        const request = {
            numero: dni
        } 

        return axiosReferenciadorAWS.post('/referenciador/obtener', request).then((response) => {           

            const  responseData = {
                cuerpo : response.data.cuerpo,
                codigoRespuesta: response.data.codigo            
                }
                                 
         return Promise.resolve(responseData);
        }).catch((error) => {
            return Promise.reject(error);
        })
    }*/

    static obtenerUsuario(dni) {
        return axiosReferenciador.get('/referenciador/documento/'+dni).then((response) => {            
            const  responseData = {
                cuerpo : response.data.cuerpo,
                codigoRespuesta: response.data.codigo            
                }
            return Promise.resolve(responseData);
        }).catch((error) => {
            console.log(error);
            return Promise.reject(error);
        })
    }



    static obtenerReporteSoat() {
        return axiosReferenciador.get('/reporte/obtener/Log').then((response) => {            
            
            return Promise.resolve(response);
        }).catch((error) => {
            console.log(error);
            return Promise.reject(error);
        })
    }


    static obtenerReferenciado(dni) {
        return axiosReferenciador.get('/referenciador/documentoReferenciador/'+dni).then((response) => {            
            const listaSolicitud = []; 
            response.data.cuerpo.map((e)=>{
                const responseData = {
                    fullName: e.nombres,
                    numeroDocumento:e.numeroDocumento,
                    phone: e.celular,
                    products: e.seguroInteres,
                    date: e.fechaRegistro,
                    status: e.estado
                }
                listaSolicitud.push(responseData);
            });


           
            return Promise.resolve(listaSolicitud);
        }).catch((error) => {
            console.log(error);
            return Promise.reject(error);
        })
    }
    

   
    
    static registerLeads(listLead, idReferenciador , objOrigenWeb , tipoLead) {

        var listLeadRequest = [];

        listLead.forEach(function(element) {
            const lead = {
                          'nombre':element.fullname,
                          'dni':element.document,
                          'celular':element.phone,
                          'correo':element.email,
                          'productos':element.product }
            listLeadRequest.push(lead);
        });

        const request = {
            idReferenciador: idReferenciador,
            tipoLead: tipoLead,
            origen: objOrigenWeb.origen,
            origenMedio: objOrigenWeb.origenMedio,
            origenContenido: objOrigenWeb.origenContenido,
            origenCampania: objOrigenWeb.origenCampania,
            listaLead: listLeadRequest,
        }

        return axiosReferenciador.post('/lead/registrar/lista', request).then((response) => {
             
            const  responseData = {
                cuerpo : response.data.cuerpo,
                codigoRespuesta: response.data.codigo            
            }

            return Promise.resolve(responseData);
        }).catch((error) => {
            return Promise.reject(error);
        })
    }


    static registerListaReferenciados(listLead, idReferenciador , objOrigenWeb , tipoLead,dniReferenciador) {

        var listLeadRequest = [];

        listLead.forEach(function(element) {
            const lead = {
                          'nombre':element.fullname,
                          'dni':element.document,
                          'celular':element.phone,
                          'correo':element.email,
                          'productos':element.product }
            listLeadRequest.push(lead);
        });

        const request = {
            idReferenciador: idReferenciador,
            tipoLead: tipoLead,
            dniReferenciador: dniReferenciador,
            origen: objOrigenWeb.origen,
            origenMedio: objOrigenWeb.origenMedio,
            origenContenido: objOrigenWeb.origenContenido,
            origenCampania: objOrigenWeb.origenCampania,
            listaLead: listLeadRequest,
        }

        return axiosReferenciador.post('/lead/registrar/lista/referenciadores', request).then((response) => {
             
            const  responseData = {
                cuerpo : response.data.cuerpo,
                codigoRespuesta: response.data.codigo            
            }

            return Promise.resolve(responseData);
        }).catch((error) => {
            return Promise.reject(error);
        })
    }
}

export default apiReferenciador;