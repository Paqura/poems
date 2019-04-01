import * as R from 'ramda';

const
	getUserDataFromStorage = (dataName: string) => localStorage.getItem(dataName);

export default () => R.pipe(
	getUserDataFromStorage,
	Boolean,
)('currentUser');