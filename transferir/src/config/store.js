import { createStore, applyMiddleware } from 'redux';
// import reducers from '../reducers/reducerApp';
import { combineForms, modelReducer } from 'react-redux-form';
import thunkMiddleware from 'redux-thunk';
import { sessionService, sessionReducer } from 'redux-react-session';
import referenciadorReducers from './../reducers/referenciadorReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './../reducers/index';
import logger from 'redux-logger';

// const store = applyMiddleware(thunkMiddleware)(createStore)(combineReducers({
//     session: sessionReducer,
//     listReferenciados:[],
//     refer: combineForms({
//         reducers: reducers,
//     }, 'refer'),

//     // referenciador:  combineForms({
//     //      accesoReferenciador: modelReducer("accesoReferenciador", referenciadorReducers),
//     // }, 'referenciador'),
// }));

const middleware = applyMiddleware(logger, thunkMiddleware);

const store = createStore(
	reducers,
	composeWithDevTools(middleware)
);
console.log('store: ', store.getState());
// sessionService.initSessionService(store);

export default store;