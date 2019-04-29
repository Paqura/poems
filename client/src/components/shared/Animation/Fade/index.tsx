import styled from 'styled-components';

export const Fade: any = styled.div`
  transition: 5s;
  opacity: ${(props: {state: string}) => (props.state === 'entered' ? 1 : 0)};
`;

export default Fade;
