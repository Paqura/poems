import {TAction} from 'src/ducks/typedefs/action';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import settings from 'src/settings';
import jwt_decode from 'jwt-decode';
import {SagaIterator} from 'redux-saga';

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

	CHECK_AUTH_USER: 'CHECK_AUTH_USER',
	SET_USER_INFO  : 'SET_USER_INFO',
};

export const signInRequest = (payload: {
	email   : string,
	password: string,
}, prevLocation: string | undefined): TAction => ({
	type: ACTION_TYPE.SIGN_IN_REQUEST,
	payload,
	extraParams: prevLocation,
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

export const checkAuthUser = (): TAction => ({
	type: ACTION_TYPE.CHECK_AUTH_USER,
});

const checkAuthUserSaga = function* (): SagaIterator {
	const candidate = localStorage.getItem('currentUser');
	const currentUser = candidate && JSON.parse(candidate);

	yield put({
		type: ACTION_TYPE.SET_USER_INFO,
		payload: currentUser,
	});
};

const signInSaga = function* (action: TAction): SagaIterator {
	try {
		const response = yield call(axios.post, settings.AUTH_API.SING_IN, action.payload);
		const decodedUserData: TUserDataFromJWT = jwt_decode(response.data.token);

		localStorage.setItem('currentUser', JSON.stringify(decodedUserData));

		yield put({type: ACTION_TYPE.SIGN_IN_SUCCESS,
			payload: {
				firstName: decodedUserData.firstName,
				lastName : decodedUserData.lastName,
				email    : decodedUserData.email,
			},
		});

		window.location.href = action.extraParams ? `#${action.extraParams}` : '/';
	} catch(err) {
		yield put({
			type: ACTION_TYPE.FAILURE,
			payload: err.response.data.message || err.message,
		});
	}
};

const signUpSaga = function* (action: TAction): SagaIterator {
	try {
		const response = yield call(axios.post, settings.AUTH_API.SING_UP, action.payload);

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

export const saga = function* (): SagaIterator {
	yield all([
		yield takeEvery(ACTION_TYPE.SIGN_IN_REQUEST, signInSaga),
		yield takeEvery(ACTION_TYPE.SIGN_UP_REQUEST, signUpSaga),
		yield takeEvery(ACTION_TYPE.LOGOUT, logoutSaga),
		yield takeEvery(ACTION_TYPE.CHECK_AUTH_USER, checkAuthUserSaga),
	]);
};

type TState = {
	currentUser: any,
	errorMessage: any,
	loading: boolean,
};

const
	InitialState = {
		currentUser : null,
		errorMessage: null,
		loading     : false,
	};

export const reducer = (state = InitialState, action: TAction): TState => ({
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
		...state,
		currentUser: null,
		errorMessage: null,
		loading: false,
	},

	[ACTION_TYPE.SET_USER_INFO]: {
		...state,
		currentUser: action.payload,
	},
})[action.type] || state;
