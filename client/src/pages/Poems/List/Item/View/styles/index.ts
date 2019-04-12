import styled from 'styled-components';

const View = styled.div`
	position: absolute;
	right: 16px;
	bottom: 16px;

	display: flex;
	align-items: center;
	opacity: 0.4;
`;

const Counter = styled.span`
	font-size: 16px;
	letter-spacing: 0.4px;
	display: flex;
	margin-left: 8px;
`;

export default {
	Counter,
	View,
};
