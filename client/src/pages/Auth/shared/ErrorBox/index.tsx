import React from 'react';
import UI from './styles';

type TError = string;

type TProps = {
	error: TError,
};

export default (props: TProps) => (
	<UI.ErrorWrapper>
		{props.error}
	</UI.ErrorWrapper>
);
