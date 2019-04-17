import {TAction} from 'src/ducks/typedefs/action';
import {Record} from 'immutable';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import settings from 'src/settings';

type TPoemState = {
	poem: Object,
	loading: boolean,
	error: string | null,
} & Record<any>;

export const moduleName = 'details';

const ACTION_TYPE = {
	FETCH_POEM_REQUEST: 'FETCH_POEM_REQUEST',
	FETCH_POEM_SUCCESS: 'FETCH_POEM_SUCCESS',
	FETCH_POEM_FAILURE: 'FETCH_POEM_FAILURE',
};

export const fetchPoem = (id: string) => ({
	type: ACTION_TYPE.FETCH_POEM_REQUEST,
	payload: id,
});

export const fetchPoemSaga = function* (action: TAction): any {
	const {payload} = action;

	try {
		const {data} = yield call(axios.get, settings.POEMS_API.GET_BY_ID(payload));
		yield put({type: ACTION_TYPE.FETCH_POEM_SUCCESS, payload: data});
	} catch(error) {
		yield put({type: ACTION_TYPE.FETCH_POEM_FAILURE, payload: error.message});
	}
};

export const saga = function* (): any {
	yield all([
		yield takeEvery(ACTION_TYPE.FETCH_POEM_REQUEST, fetchPoemSaga),
	]);
};

const PoemShema = Record({
	poem: Object,
	loading: false,
	error: null,
});

export const reducer = (state: TPoemState = new PoemShema(), action: TAction): TPoemState => {
	const {type, payload} = action;

	return ({
		[ACTION_TYPE.FETCH_POEM_REQUEST]: state
			.set('loading', true),

		[ACTION_TYPE.FETCH_POEM_SUCCESS]: state
			.set('loading', false)
			.set('poem', payload)
			.set('error', null),

		[ACTION_TYPE.FETCH_POEM_FAILURE]: state
			.set('loading', false)
			.set('error', payload),
	})[type] || state;
};
