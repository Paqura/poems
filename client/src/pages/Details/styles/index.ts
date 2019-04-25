import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 32px;
`;

const Sidebar = styled.aside`
	background-color: #ffffff;
`;

const PoemWrapper = styled.article`
	position: relative;
	padding: 32px;
	background-color: #ffffff;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);
`;

const Title = styled.h4`
	width: 100%;
	font-size: 28px;
	text-align: left;
`;

const Text = styled.pre`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	white-space: pre-line;
	text-align: left;
`;

export default {
	Grid,
	Sidebar,
	PoemWrapper,
	Title,
	Text,
};
