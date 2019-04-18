export default () => {
	const currentUserFromStorage = localStorage.getItem('currentUser');
	return currentUserFromStorage && JSON.parse(currentUserFromStorage).userId;
};
