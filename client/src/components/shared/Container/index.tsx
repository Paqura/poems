import React from 'react';
import styled from 'styled-components';

export const Container: any = styled.div`
	max-width: 1240px;
	width: 100%;
	margin: 0 auto;
`;

export default (props: {
	children: any,
}) =>
	<Container>
		{props.children}
	</Container>;