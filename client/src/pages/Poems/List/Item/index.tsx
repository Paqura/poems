import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import debounce from 'lodash.debounce';
import {moduleName, updatePoems} from 'src/ducks/poems';
import UI from './styles';
import View from './View';
import { Link } from 'react-router-dom';

const ResponsiveImageStyle = {
	maxWidth: '100%',
	height: 'auto',
	objectFit: 'cover',
};

type TPoem = {
	_id: string,
	title: string,
	body: string,
	imgPath: string,
	views: string[],
};

type TProps = {
	data: TPoem,
	key: string,
	updatePoems: (data: TPoem) => void,
};

const
	Item: React.FC<any> = (props: TProps) => {
		const poemRef = useRef<HTMLLIElement>(null);

		const checkScrollPosition = debounce(() => {
			if(!poemRef.current) return;

			const userId = localStorage.getItem('currentUser') || localStorage.getItem('anonym');
			const element = poemRef.current;
			const zone = element.offsetTop + Math.floor(element.offsetHeight / 2);

			return window.pageYOffset > zone && userId && !props.data.views.some(view => view === userId)
				? props.updatePoems({...props.data, views: [...props.data.views, userId]})
				: false;
		}, 200);

		useEffect(() => {
			window.addEventListener('scroll', checkScrollPosition);
		},[]);

		return (
			<UI.Item ref={poemRef}>
				<div>
					<LazyLoadImage
						src={props.data.imgPath}
						effect="blur"
						alt={props.data.title}
						style={ResponsiveImageStyle}
					/>
				</div>
				<UI.Title>
					<Link to={`/poems/${props.data._id}`}>
						{props.data.title}
					</Link>
				</UI.Title>

				<UI.Text>
					{props.data.body}
				</UI.Text>

				<View views={props.data.views} />
			</UI.Item>
		);
	};

export default connect(null, {updatePoems})(Item);
