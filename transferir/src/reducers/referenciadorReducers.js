
//BOOKS REDUCERS
export function referenciadorReducers(state={
	referenciador:[],
	acceso: false
	},action)
	{
		switch(action.type){
			case "OBT_REFERENCIADOR_PARAM":
			
				return {
					...state,
					referenciador: action.referenciador,
					acceso: action.acceso
				}
				break;
		}
		return state;
	}
