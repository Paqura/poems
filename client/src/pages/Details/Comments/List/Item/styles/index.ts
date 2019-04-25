import styled from 'styled-components';

const Comment = styled.li`
	padding: 16px;
	background: #ffffff;
	margin-bottom: 16px;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);
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

export default {
	Comment,
	Author,
	Text,
};
