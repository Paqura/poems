import styled from 'styled-components';

export const BackGround = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: -1;
`;

export const Hero = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

export const PreTitle = styled.h3`
	display: inline-block;
	text-align: center;
	font-size: 36px;
	text-transform: lowercase;
	letter-spacing: 1px;
	font-weight: 600;
	border-bottom: 2px solid #000000;
	margin: 0;
`;

export const Title = styled.h1`
	margin: 0;
	font-size: 72px;
	letter-spacing: 1px;
	font-weight: 900;
`;
