import React, {useState, useEffect} from 'react';
import {Transition} from 'react-transition-group';
import {BackGround, Hero, PreTitle, Title} from './styles';
import styled from 'styled-components';

export const Fade: any = styled.div`
  transition: 5s;
  opacity: ${(props: any) => (props.state === 'entered' ? 1 : 0)};
`;

const
	Home = () => {
		const [animate, setAnimate] = useState(false);

		useEffect(() => {
			setTimeout(() => setAnimate(true));
		}, []);

		return (
			<BackGround>
				<Transition in={animate} timeout={0} mountOnEnter>
					{(state: any) =>
						<Fade state={state}>
							<Hero>
								<PreTitle>Author</PreTitle>
								<Title>SlavalS</Title>
							</Hero>
						</Fade>}
				</Transition>
			</BackGround>
		);
	};

export default Home;
