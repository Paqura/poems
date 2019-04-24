import * as R from 'ramda';

const removeAsterix = (str: string) => str.replace(/[\*|\.]*/gi, '');
const sliceByLen = (len: number) => (str: string) => str.slice(0, len);
const addElipsis = (str: string) => `${str}...`;

export default (str: string, len: number) =>
	R.compose(
		addElipsis,
		removeAsterix,
		sliceByLen(len),
	)(str);
