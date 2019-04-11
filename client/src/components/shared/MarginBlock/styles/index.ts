import styled from 'styled-components';

const Block: any = styled.div`
	margin-top: ${(props: any) => props.top ? props.top : 0}px;
	margin-bottom: ${(props: any) => props.bottom ? props.bottom : 0}px;
	margin-left: ${(props: any) => props.left ? props.left : 0}px;
	margin-right: ${(props: any) => props.right ? props.right : 0}px;
`;

export default {
	Block,
};
