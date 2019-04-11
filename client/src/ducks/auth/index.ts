import {TAction} from 'src/ducks/typedefs/action';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import API from 'src/api';
import jwt_decode from 'jwt-decode';

export type TUserDataFromJWT = {
	firstName: string;
	lastName : string;
	email    : string;
};

export const moduleName: string = 'auth';

const ACTION_TYPE = {
	SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
	SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',

	SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
	SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',

	FAILURE        : 'FAILURE',
	LOGOUT         : 'LOGOUT',
};

export const signInRequest = (payload: {
	email   : string,
	password: string,
}): TAction => ({
	type: ACTION_TYPE.SIGN_IN_REQUEST,
	payload,
});

export const signUpRequest = (payload: {
	firstName: string,
	lastName : string,
	email    : string,
	password : string,
}): TAction => ({
	type: ACTION_TYPE.SIGN_UP_REQUEST,
	payload,
});

const signInSaga = function* (action: TAction): any {
	try {
		const response = yield call(axios.post, API.auth.signIn, action.payload);
		const decodedUserData: TUserDataFromJWT = jwt_decode(response.data.token);

		localStorage.setItem('currentUser', JSON.stringify(decodedUserData));

		yield put({type: ACTION_TYPE.SIGN_IN_SUCCESS,
			payload: {
				firstName: decodedUserData.firstName,
				lastName : decodedUserData.lastName,
				email    : decodedUserData.email,
			},
		});

		window.location.href = '/';
	} catch(err) {
		yield put({
			type: ACTION_TYPE.FAILURE,
			payload: err.response.data.message || err.message,
		});
	}
};

const signUpSaga = function* (action: TAction): any {
	try {
		const response = yield call(axios.post, API.auth.signUp, action.payload);

		if(response.statusText === 'Created')
			yield put({
				type: ACTION_TYPE.SIGN_UP_SUCCESS,
				payload: response.statusText,
			});
	} catch(err) {
		yield put({
			type: ACTION_TYPE.FAILURE,
			payload: err.response.data.message || err.message,
		});
	}
};

export const logoutAction = () => ({
	type: ACTION_TYPE.LOGOUT,
});

const logoutSaga = function* (): any {
	yield localStorage.clear();
};

export const saga = function* (): any {
	yield all([
		yield takeEvery(ACTION_TYPE.SIGN_IN_REQUEST, signInSaga),
		yield takeEvery(ACTION_TYPE.SIGN_UP_REQUEST, signUpSaga),
		yield takeEvery(ACTION_TYPE.LOGOUT, logoutSaga),
	]);
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

	[ACTION_TYPE.SIGN_UP_SUCCESS]: {
		...state,
		currentUser : true,
		errorMessage: null,
		loading: false,
	},

	[ACTION_TYPE.FAILURE]: {
		...state,
		currentUser: null,
		errorMessage: action.payload,
		loading: false,
	},

	[ACTION_TYPE.LOGOUT]: {
		currentUser: null,
		errorMessage: null,
		loading: false,
	},
})[action.type] || state;
