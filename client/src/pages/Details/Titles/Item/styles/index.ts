import styled from 'styled-components';

const Title: any = styled.li`
	background-color: ${(props: any) => props.isActive ? '#7c9fff' : '#fafafa'};
	color: ${(props: any) => props.isActive ? '#ffffff' : '#000000'};
	border-radius: 2px;
	font-size: 14px;

	&:not(:last-child) {
		margin-bottom: 8px;
	}

	&:hover {
		background-color: ${(props: any) => !props.isActive && '#edf2ff'};
	}
`;

export const OwnLinkStyle = {
	padding: '8px',
	display: 'block',
	width: '100%',
	height: '100%',
};

export const ActiveLinkStyle = {
	backgroundColor: '#7c9fff',
	color: '#ffffff',
};

export default {
	Title,
};
