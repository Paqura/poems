import styled from 'styled-components';

export const Item = styled.li`
	width: auto;
`;

export const HeaderLink: any = styled.a`
	position: relative;
	text-decoration: none;
	display: flex;
	padding: 4px 12px;
	color: #000000;
	padding: 18px 24px;
	font-size: 20px;
	letter-spacing: 0.6px;

	&:hover::after {
		content: '';
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 2px dashed #000000;
		border-color: #000000;
		transition: 200ms;
	}
`;