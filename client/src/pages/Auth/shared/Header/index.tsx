import React from 'react';
import styled from 'styled-components';

type TProps = {
	title: string,
};

const Title = styled.h2`
	margin-top: 0;
  margin-bottom: 32px;
`;

export default (props: TProps) => (
	<header>
		<Title>{props.title}</Title>
	</header>
);
