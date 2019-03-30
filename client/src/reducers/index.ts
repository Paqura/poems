import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as formReducer} from 'redux-form'
import {default as authReducer} from 'src/ducks/auth';

export default (history: any) => combineReducers({
	router: connectRouter(history),
	form: formReducer,
	auth: authReducer,
});