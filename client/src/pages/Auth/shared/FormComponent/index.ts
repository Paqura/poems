import styled from 'styled-components';
import {Button} from 'src/components/shared/Button';

const Wrapper = styled.div`
	max-width: 480px;
	width: 100%;
	margin: 0 auto;
	padding: 32px;

  box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);
`;

const Field = styled.input`
	cursor: text;
	border: 2px solid #000000;
	width: 100%;
	display: flex;
	padding: 4px 8px;
	min-height: 24px;
	transition: border-color 200ms;
	border-radius: 2px;

	&:hover {
		border-color: #ccd6f2;
	}

	&:focus {
		outline: none;
		border-color: #7c9fff;
	}
`;

const Submit = styled(Button)`
	background-color: #7c9fff;
	padding: 16px;
	border-radius: 2px;
	color: #ffffff;
	font-size: 18px;
	width: 100%;

	&:not(:disabled):hover {
		opacity: 0.7;
	}

	&:disabled {
		cursor: not-allowed;
		background-color: #edf2ff;
	}
`;

export default {
	Wrapper,
	Field,
	Submit,
};
