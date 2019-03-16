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
	padding: 18px 24px;
	font-size: 18px;
	letter-spacing: 0.6px;

	&:hover {
		border-bottom: 2px solid #616161;
	}
`;

export const ActiveStyle = {
	borderBottom: '2px solid #000000',
};