import {TAction} from 'src/ducks/typedefs/action';
import {Record} from 'immutable';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import settings from 'src/settings';

type TPoemState = {
	poem: Object,
	comments: string[],
	isCommentLoading: boolean,
	isPoemLoading: boolean,
	error: string | null,
} & Record<any>;

export const moduleName = 'details';

const deleteCommentFromState = (comments: any[], commentId: string) => {
	return comments.filter(comment => comment._id !== commentId);
};

const ACTION_TYPE = {
	FETCH_POEM_REQUEST: 'FETCH_POEM_REQUEST',
	FETCH_POEM_SUCCESS: 'FETCH_POEM_SUCCESS',
	FETCH_POEM_FAILURE: 'FETCH_POEM_FAILURE',

	ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
	ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
	ADD_COMMENT_FAILURE: 'ADD_COMMENT_FAILURE',

	DELETE_COMMENT_REQUEST: 'DELETE_COMMENT_REQUEST',
	DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
	DELETE_COMMENT_FAILURE: 'DELETE_COMMENT_FAILURE',
};

export const fetchPoem = (id: string) => ({
	type: ACTION_TYPE.FETCH_POEM_REQUEST,
	payload: id,
});

const fetchPoemSaga = function* (action: TAction): any {
	const {payload} = action;

	try {
		const {data} = yield call(axios.get, settings.POEMS_API.GET_BY_ID(payload));
		yield put({type: ACTION_TYPE.FETCH_POEM_SUCCESS, payload: data});
	} catch(error) {
		yield put({type: ACTION_TYPE.FETCH_POEM_FAILURE, payload: error.message});
	}
};

export const addComment = (payload: any) => ({
	type: ACTION_TYPE.ADD_COMMENT_REQUEST,
	payload,
});

const addCommentSaga = function* (action: TAction): any {
	const {payload} = action;

	try {
		const {data} = yield call(axios.post, settings.COMMENTS_API.ADD(payload.poemRef), payload);
		yield put({type: ACTION_TYPE.ADD_COMMENT_SUCCESS, payload: data});
	} catch(error) {
		yield put({type: ACTION_TYPE.ADD_COMMENT_FAILURE, payload: error.message});
	}
};

export const deleteComment = (id: string) => ({
	type: ACTION_TYPE.DELETE_COMMENT_REQUEST,
	payload: id,
});

const deleteCommentSaga = function* (action: TAction): any {
	const {payload} = action;

	try {
		yield call(axios.delete, settings.COMMENTS_API.DELETE(payload));
		yield put({type: ACTION_TYPE.DELETE_COMMENT_SUCCESS, payload});
	} catch(error) {
		yield put({type: ACTION_TYPE.DELETE_COMMENT_FAILURE, payload: error.message});
	}
};

export const saga = function* (): any {
	yield all([
		yield takeEvery(ACTION_TYPE.FETCH_POEM_REQUEST, fetchPoemSaga),
		yield takeEvery(ACTION_TYPE.ADD_COMMENT_REQUEST, addCommentSaga),
		yield takeEvery(ACTION_TYPE.DELETE_COMMENT_REQUEST, deleteCommentSaga),
	]);
};

const PoemShema = Record({
	poem: Object,
	comments: [],
	isCommentLoading: false,
	isPoemLoading: false,
	error: null,
});

export const reducer = (state: TPoemState = new PoemShema(), action: TAction): TPoemState => {
	const {type, payload} = action;

	return ({
		[ACTION_TYPE.DELETE_COMMENT_SUCCESS]: state
			.set('comments', deleteCommentFromState(state.comments, payload))
			.set('error', null),

		[ACTION_TYPE.DELETE_COMMENT_FAILURE]: state
			.set('error', payload),

		[ACTION_TYPE.ADD_COMMENT_REQUEST]: state
			.set('isCommentLoading', true),

		[ACTION_TYPE.ADD_COMMENT_SUCCESS]: state
			.set('isCommentLoading', false)
			.set('comments', [...state.comments, payload]),

		[ACTION_TYPE.ADD_COMMENT_FAILURE]: state
			.set('isCommentLoading', false),

		[ACTION_TYPE.FETCH_POEM_REQUEST]: state
			.set('isPoemLoading', true),

		[ACTION_TYPE.FETCH_POEM_SUCCESS]: state
			.set('isPoemLoading', false)
			.set('comments', payload && payload.comments)
			.set('poem', payload && payload.data)
			.set('error', null),

		[ACTION_TYPE.FETCH_POEM_FAILURE]: state
			.set('isPoemLoading', false)
			.set('error', payload),
	})[type] || state;
};
