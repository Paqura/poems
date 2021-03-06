export default {
	AUTH_API: {
		SING_IN: 'api/auth/sign-in',
		SING_UP: 'api/auth/sign-up',
	},

	POEMS_API: {
		GET_ALL : 'api/poems',
		UPDATE_ONE: (id: string) => `api/poems/update/${id}`,
		GET_BY_ID: (id: string) => `api/poems/${id}`,
	},

	COMMENTS_API: {
		ADD: (poemId: string) => `api/comments/add/${poemId}`,
		UPDATE: (id: string) => `api/comments/update/${id}`,
		DELETE: (id: string) => `api/comments/${id}`,
	},

	DELAY_TIME: 1200,
};
