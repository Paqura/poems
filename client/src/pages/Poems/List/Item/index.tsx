import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import debounce from 'lodash.debounce';
import {updatePoems} from 'src/ducks/poems';
import settings from 'src/settings';
import UI, {ResponsiveImageStyle} from './styles';
import {getCurrentUserFromStorage} from 'src/pages/helpers';
import View from './View';
import Link from 'src/components/shared/DefaultLink';

type TPoem = {
	_id: string,
	title: string,
	body: string,
	imgPath: string,
	views: string[],
	favorites: string[],
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

			const userId: string = getCurrentUserFromStorage() || localStorage.getItem('anonym');
			const element: HTMLLIElement = poemRef.current;
			const zone: number = element.offsetTop;

			return userId && !props.data.views.some(view => view === userId) &&
				window.pageYOffset > zone &&
				props.updatePoems({...props.data, views: [...props.data.views, userId]});
		}, settings.DELAY_TIME);

		useEffect(() => {
			window.addEventListener('scroll', checkScrollPosition);

			return () => {
				window.removeEventListener('scroll', checkScrollPosition);
			};
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

				<View
					data={props.data}
					updatePoems={props.updatePoems}
				/>
			</UI.Item>
		);
	};

export default connect(null, {updatePoems})(Item);
