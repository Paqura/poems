import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import UI from './styles';
import View from './View';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ResponsiveImageStyle = {
	maxWidth: '100%',
	height: 'auto',
	objectFit: 'cover',
};

type TPoem = {
	data: {
		_id: string,
		title: string,
		body: string,
		imgPath: string,
		views: [string],
	},

	key: string,
};

const
	Item: React.FC<TPoem> = (props: TPoem) => (
		<UI.Item>
			<div>
				<LazyLoadImage
					src={props.data.imgPath}
					effect="blur"
					alt={props.data.title}
					style={ResponsiveImageStyle}
				/>
			</div>
			<UI.Title>{props.data.title}</UI.Title>

			<UI.Text>
				{props.data.body}
			</UI.Text>

			<View views={props.data.views} />
		</UI.Item>
	);

export default Item;
