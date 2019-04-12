import styled from 'styled-components';

const Item = styled.li`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 24px;
	padding-bottom: 30px;
	max-width: 600px;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);

	&:not(:first-child) {
		margin-top: 32px;
	}
`;

const Title = styled.h4`
	width: 100%;
	font-size: 36px;
	text-align: center;
`;

const Text = styled.pre`
	font-size: 18px;
	line-height: 1.5;
	font-weight: 500;
	white-space: pre-line;
	text-align: center;
`;

export default {
	Item,
	Text,
	Title,
};
