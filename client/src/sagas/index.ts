import {all} from 'redux-saga/effects';
import {saga as authSaga} from 'src/ducks/auth';

export const saga = function * () {
	yield all([
		authSaga(),
	]);
};
