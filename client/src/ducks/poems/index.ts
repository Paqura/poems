import {TAction} from 'src/ducks/typedefs/action';
import {Record} from 'immutable';
import {all, cancel, call, takeEvery, put, select} from 'redux-saga/effects';
import axios from 'axios';
import settings from 'src/settings';

export const moduleName = 'poems';

export type TPoemState = {
	[key: string] : {
		poems: [],
		loading: boolean,
	} & Record<any>,
};

export const ACTION_TYPE = {
	FETCH_POEMS_REQUEST: 'FETCH_POEMS_REQUEST',
	FETCH_POEMS_RETRY  : 'FETCH_POEMS_RETRY',
	FETCH_POEMS_SUCCESS: 'FETCH_POEMS_SUCCESS',
	FETCH_POEMS_FAILURE: 'FETCH_POEMS_FAILURE',
};

export const fetchPoems = (): TAction => ({
	type: ACTION_TYPE.FETCH_POEMS_REQUEST,
});

export const fetchPoemsSaga = function* (action: TAction): any {
	const state = yield select();

	if(state[moduleName].get('poems').length)
		yield cancel();

	try {
		const {data} = yield call(axios.get, settings.POEMS_API.GET_ALL);
		yield put({type: ACTION_TYPE.FETCH_POEMS_SUCCESS, payload: data});
	} catch (error) {
		yield put({type: ACTION_TYPE.FETCH_POEMS_FAILURE, payload: error.message});
	}
};

const PoemsSchema = Record({
	error: null,
	poems: [],
	loading: false,
});

export const reducer = (state = new PoemsSchema(), action: TAction) => {
	const {type, payload} = action;

	return ({
		[ACTION_TYPE.FETCH_POEMS_RETRY]: state,
		[ACTION_TYPE.FETCH_POEMS_REQUEST]: state
			.set('error', null)
			.set('loading', true),

		[ACTION_TYPE.FETCH_POEMS_SUCCESS]: state
			.set('error', null)
			.set('loading', false)
			.set('poems', payload),

		[ACTION_TYPE.FETCH_POEMS_FAILURE]: state
			.set('error', payload)
			.set('loading', false),
	})[type] || state;
};

export const saga = function* (): any {
	yield all([
		yield takeEvery(ACTION_TYPE.FETCH_POEMS_REQUEST, fetchPoemsSaga),
	]);
};
