export type TComment = {
	_id: string,
	text: string,
	poemRef: string,

	owner: {
		_id: string,
		firstName: string,
		lastName: string,
	},
};
