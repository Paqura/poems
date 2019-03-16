import styled from 'styled-components';

export const Item = styled.li`
	width: auto;
`;

export const HeaderLink: any = styled.a`
	text-decoration: none;
	display: flex;
	padding: 4px 12px;
	color: #000000;
	border: 2px solid transparent;

	&:hover {
		border: 2px solid #000000;
	}
`;

export const ActiveStyle = {
	border: '2px solid #000000',
};