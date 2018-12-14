
export function registrarOrigenWeb(origenWeb) {    
    return { 
             type: 'OBT_REGISTRAR_ORIGEN_WEB', 
             origen : origenWeb.origen,
             origenMedio : origenWeb.origenMedio,
             origenContenido : origenWeb.origenContenido,
             origenCamapania : origenWeb.origenCamapania
           };
}