import styled from 'styled-components';

export const  AbsoluteStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

const Centered: any = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
	`;

export default {
	Centered,
};
