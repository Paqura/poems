import {TAction} from 'src/ducks/typedefs/action';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import API from 'src/api';

export const moduleName: string = 'auth';

const ACTION_TYPE = {
	SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
	SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
};

export const signInRequest = (payload: {
	email: string,
	password: string,
}): TAction => ({
	type: ACTION_TYPE.SIGN_IN_REQUEST,
	payload,
});

const signInSaga = function* (action: TAction): any {
	try {
		const response = yield call(axios.post, API.auth.signIn, action.payload);
		yield put({type: ACTION_TYPE.SIGN_IN_SUCCESS, payload: response.data});
	} catch(err) {
		yield put({
			type: ACTION_TYPE.SIGN_IN_FAILURE,
			payload: err.response.data.message || err.message,
		})
	}
};

export const saga = function* (): any {
	yield all([
		yield takeEvery(ACTION_TYPE.SIGN_IN_REQUEST, signInSaga),
	])
};

const
	InitialState = {
		currentUser : null,
		errorMessage: null,
		loading     : false,
	};

export const reducer = (state = InitialState, action: TAction): any => ({
	[ACTION_TYPE.SIGN_IN_REQUEST]: {
		...state,
		loading: true,
	},

	[ACTION_TYPE.SIGN_IN_SUCCESS]: {
		...state,
		currentUser: action.payload,
		errorMessage: null,
		loading: false,
	},

	[ACTION_TYPE.SIGN_IN_FAILURE]: {
		...state,
		errorMessage: action.payload,
		loading: false,
	},
})[action.type] || state;