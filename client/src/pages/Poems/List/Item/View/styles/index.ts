import styled from 'styled-components';
import Link from 'src/components/shared/DefaultLink';

const View = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	padding: 12px;
	background-color: #fbfbff;
  opacity: 0.8;

	& svg {
		fill: #6a6a6a;
	}

	& svg#like {
		&:hover {
			fill: tomato;
		}
	}

	& ._is-active {
		fill: tomato;
	}
`;

const Counter = styled.span`
	font-size: 16px;
	letter-spacing: 0.4px;
	display: flex;
	margin-left: 8px;
	color: #6a6a6a;
`;

const Comments = styled(Link)`
	color: #6a6a6a;
	border-bottom: 1px solid #6a6a6a;

	&:hover {
		border-bottom: 1px solid transparent;
	}
`;

export default {
	Counter,
	Comments,
	View,
};
