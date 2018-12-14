
export function origenWebReducers(state={
	origen : '',
	origenMedio : '',
	origenContenido : '',
	origenCamapania : ''
	},action)
	{
		switch(action.type){
			case "OBT_REGISTRAR_ORIGEN_WEB":
			
				return {
					...state,
					origen : action.origen,
					origenMedio : action.origenMedio,
					origenContenido : action.origenContenido,
					origenCamapania : action.origenCamapania
				}
				break;
		}
		return state;
	}