import styled from 'styled-components';

const Item = styled.li`
	width: auto;
`;

const HeaderLink: any = styled.a`
	position: relative;
	text-decoration: none;
	display: flex;
	color: #000000;
	padding: 18px 24px;
	font-size: 22px;
	letter-spacing: 0.6px;
	opacity: 0.6;

	&:hover {
		opacity: 1;
	}
`;

export const ActiveLinkStyle = {opacity: 1};

export default {
	Item,
	HeaderLink,
};
