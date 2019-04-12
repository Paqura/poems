import {all} from 'redux-saga/effects';
import {saga as authSaga} from 'src/ducks/auth';
import {saga as poemsSaga} from 'src/ducks/poems';

export const saga = function * () {
	yield all([
		authSaga(),
		poemsSaga(),
	]);
};
