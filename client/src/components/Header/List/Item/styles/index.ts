import styled from 'styled-components';

const Item = styled.li`
	width: auto;
`;

const HeaderLink: any = styled.a`
	position: relative;
	text-decoration: none;
	text-transform: capitalize;
	display: flex;
	color: #000000;
	padding: 18px 24px;
	font-size: 18px;
	letter-spacing: 1px;
	font-weight: 500;
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
