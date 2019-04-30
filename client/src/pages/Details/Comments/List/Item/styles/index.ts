import styled from 'styled-components';
import {Button} from 'src/components/shared/Button';

const Comment = styled.li`
	padding: 16px;
	background: #ffffff;
	margin-bottom: 16px;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);

	&.item-enter {
		opacity: 0;
	}

	&.item-enter-active {
		opacity: 1;
		transition: opacity 500ms ease-in;
	}

	&.item-exit {
		opacity: 1;
	}

	&.item-exit-active {
		opacity: 0;
		transition: opacity 200ms ease-in;
	}
`;

const Author = styled.h5`
	margin: 0 0 8px 0;
`;

const Text = styled.p`
	font-size: 14px;
	margin: 0;
	padding: 8px;
	border-radius: 2px;
	background-color: rgba(248, 246, 246, 0.5);
`;

const DeleteButton = styled(Button)`
	background-color: #e79191;
	padding: 8px;
	border-radius: 2px;
	font-size: 14px;
	color: #ffffff;
`;

const UpdateButton = styled(Button)`
	background-color: #7c9fff;
	padding: 8px;
	border-radius: 2px;
	font-size: 14px;
	color: #ffffff;
	margin-right: 16px;
`;

export default {
	Comment,
	DeleteButton,
	UpdateButton,
	Author,
	Text,
};
