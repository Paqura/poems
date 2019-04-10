import * as R from 'ramda';

const
	matchAuthRoutes = (str: string) => ['/sign-in', '/sign-up', '/confirm'].filter((route: string) => str === route),
	compact = (matchArray: any[]) => matchArray.filter(Boolean),
	checkLength = (preparedArrayAfterMatching: string[] | []) => !preparedArrayAfterMatching.length;

export default (pathName: string) => R.pipe(
	matchAuthRoutes,
	compact,
	checkLength,
	Boolean,
)(pathName);
