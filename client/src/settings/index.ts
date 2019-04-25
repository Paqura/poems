export default {
	AUTH_API: {
		SING_IN: 'api/auth/sign-in',
		SING_UP: 'api/auth/sign-up',
	},

	POEMS_API: {
		GET_ALL : 'api/poems',
		UPDATE_ONE: 'api/poems/edit/',
		GET_BY_ID: (id: string) => `api/poems/${id}`,
	},

	COMMENTS_API: {
		ADD: (poemId: string) => `api/comments/add/${poemId}`,
	},

	DELAY_TIME: 1200,
};
