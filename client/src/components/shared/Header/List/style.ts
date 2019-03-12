import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

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