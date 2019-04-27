import React from 'react';
import DefaultLink from 'src/components/shared/DefaultLink';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	left: 20px;
	top: 20px;
`;

export default () => (
	<Wrapper>
		<DefaultLink to="/">
			<svg id="back" x="0px" y="0px" viewBox="0 0 32.635 32.635" width="24" height="24">
				<g>
					<path d="M32.135,16.817H0.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h31.635c0.276,0,0.5,0.224,0.5,0.5
						S32.411,16.817,32.135,16.817z"/>
					<path d="M13.037,29.353c-0.128,0-0.256-0.049-0.354-0.146L0.146,16.669C0.053,16.575,0,16.448,0,16.315s0.053-0.26,0.146-0.354
						L12.684,3.429c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L1.207,16.315l12.184,12.184c0.195,0.195,0.195,0.512,0,0.707
						C13.293,29.304,13.165,29.353,13.037,29.353z"/>
				</g>
			</svg>
		</DefaultLink>
	</Wrapper>
);
