import {combineReducers} from 'redux';
import {reducer as signInReducer} from './sign-in';

export default combineReducers({
	signIn: signInReducer,
});
