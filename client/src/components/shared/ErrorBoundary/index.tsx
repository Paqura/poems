import React, {Component} from 'react';

class ErrorBoundary extends Component<any, {hasError: boolean}> {
	constructor(props: any) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error: any) {
		return {hasError: true};
	}

	componentDidCatch(error: any, info: any) {
		console.error(error, info);
	}

	render() {
		if (this.state.hasError)
			return <h1>Что-то пошло не так.</h1>;

		return this.props.children;
	}
}

export default ErrorBoundary;
