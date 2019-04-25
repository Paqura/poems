import React from 'react';

import styled from 'styled-components';
import MarginBlock from 'src/components/shared/MarginBlock';

const MessageWrapper = styled.div`
	padding: 8px;
	border: 2px solid #fea0a0;
	width: auto;
	background-color: #ffffff;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		8px 14px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);
`;

const
	ErrorBox = () => (
		<MarginBlock bottom={24}>
			<MessageWrapper>
				<span>Только зарегистрированный пользователь может оставить комментарий</span>
			</MessageWrapper>
		</MarginBlock>
	);

export default ErrorBox;
