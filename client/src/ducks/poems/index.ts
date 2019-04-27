import {TAction} from 'src/ducks/typedefs/action';
import {Record} from 'immutable';
import {all, cancel, call, takeEvery, put, select} from 'redux-saga/effects';
import axios from 'axios';
import settings from 'src/settings';

export const moduleName = 'poems';

const updatePoem = (poems: any, updatedPoem: any): any => {
	const updatedPoemIndex = poems.findIndex((poem: any) => poem._id === updatedPoem._id);
	return [...poems].map((poem: any, idx: number) => idx === updatedPoemIndex ? updatedPoem : poem);
};

export type TPoemState = {
	[key: string] : {
		poems: [],
		loading: boolean,
		error?: string,
	} & Record<any>,
};

export const ACTION_TYPE = {
	FETCH_POEMS_REQUEST: 'FETCH_POEMS_REQUEST',
	FETCH_POEMS_RETRY  : 'FETCH_POEMS_RETRY',
	FETCH_POEMS_SUCCESS: 'FETCH_POEMS_SUCCESS',
	FETCH_POEMS_FAILURE: 'FETCH_POEMS_FAILURE',

	UPDATE_POEMS_REQUEST: 'UPDATE_POEMS_REQUEST',
	UPDATE_POEMS_SUCCESS: 'UPDATE_POEMS_SUCCESS',
	UPDATE_POEMS_FAILURE: 'UPDATE_POEMS_FAILURE',
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

export const updatePoems = (payload: Object): TAction => ({
	type: ACTION_TYPE.UPDATE_POEMS_REQUEST,
	payload,
});

export const updatePoemsSaga = function* (action: TAction): any {
	const {payload} = action;

	try {
		yield call(axios.post, settings.POEMS_API.UPDATE_ONE(payload._id), payload);

		yield put({
			type: ACTION_TYPE.UPDATE_POEMS_SUCCESS,
			payload,
		});
	} catch (error) {
		yield put({
			type: ACTION_TYPE.UPDATE_POEMS_FAILURE,
			payload: error.message,
		});
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

		[ACTION_TYPE.UPDATE_POEMS_SUCCESS]: state
			.set('poems', updatePoem(state.poems, payload || {}) || state.poems),

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
		yield takeEvery(ACTION_TYPE.UPDATE_POEMS_REQUEST, updatePoemsSaga),
	]);
};
