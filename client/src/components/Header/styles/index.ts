import styled from 'styled-components';

const Header = styled.header`
	padding: 16px 32px;

	box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),
		-1px -7px 38px rgba(39,44,49,.06),
		1px 3px 8px rgba(39,44,49,.03);
`;

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default {
	Header,
	Navigation,
};
