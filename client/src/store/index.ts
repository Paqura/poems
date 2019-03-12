import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducer from 'src/reducers';
import {saga as rootSaga} from 'src/sagas';
import createBrowserHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const enhancer = () => {
	if (process.env.NODE_ENV === 'production')
		return applyMiddleware(sagaMiddleware);

	return applyMiddleware(sagaMiddleware, logger);
};

const store = createStore(rootReducer(history), enhancer());
sagaMiddleware.run(rootSaga);

export default store;
