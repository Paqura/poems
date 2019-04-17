import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as formReducer} from 'redux-form';
import {reducer as authReducer} from 'src/ducks/auth';
import {reducer as poemsReducer} from 'src/ducks/poems';
import {reducer as detailsReducer} from 'src/ducks/details';

export default (history: any) => combineReducers({
	router : connectRouter(history),
	auth   : authReducer,
	form   : formReducer,
	poems  : poemsReducer,
	details: detailsReducer,
});
