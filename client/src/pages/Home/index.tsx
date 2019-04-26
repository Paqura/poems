import React, {useState, useEffect} from 'react';
import {Transition} from 'react-transition-group';
import {BackGround, Hero, PreTitle, Title} from './styles';
import {Fade} from 'src/components/shared/Animation';

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
