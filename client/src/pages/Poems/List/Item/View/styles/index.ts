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
		fill: #999797;
	}

	& svg#like {
		fill: #e8e8e8;
		stroke: black;

		&:hover {
			fill: tomato;
		}
	}

	& #like._is-active {
		fill: tomato;
	}
`;

const Counter = styled.span`
	font-size: 14px;
	letter-spacing: 0.4px;
	display: flex;
	margin-left: 6px;
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
