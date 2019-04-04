import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import {routerMiddleware} from 'connected-react-router'
import rootReducer from 'src/reducers';
import {saga as rootSaga} from 'src/sagas';
import {createBrowserHistory} from 'history';
import logger from 'redux-logger';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const enhancer = () => {
	if (process.env.NODE_ENV === 'production')
		return applyMiddleware(routerMiddleware(history), sagaMiddleware);

	return applyMiddleware(routerMiddleware(history), sagaMiddleware, logger);
};

const store = createStore(rootReducer(history), enhancer());
sagaMiddleware.run(rootSaga);

export default store;
