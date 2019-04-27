import React, {useEffect, useRef, useContext} from 'react';
import {connect} from 'react-redux';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import debounce from 'lodash.debounce';
import {updatePoems} from 'src/ducks/poems';
import settings from 'src/settings';
import UI, {ResponsiveImageStyle} from './styles';
import {getCurrentUserFromStorage, getValueByKey} from 'src/pages/helpers';
import View from './View';
import Link from 'src/components/shared/DefaultLink';
import Context from 'src/context';

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
		const currentUser = useContext(Context.User);
		const currentUserId: string = getValueByKey(currentUser, 'userId', null) || localStorage.getItem('anonym');
		const poemRef = useRef<HTMLLIElement>(null);

		const checkScrollPosition = debounce(() => {
			if(!poemRef.current) return;

			const element: HTMLLIElement = poemRef.current;
			const zone: number = element.offsetTop;

			return currentUserId && !props.data.views.some(view => view === currentUserId) &&
				window.pageYOffset > zone &&
				props.updatePoems({...props.data, views: [...props.data.views, currentUserId]});
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
					currentUserId={currentUserId}
				/>
			</UI.Item>
		);
	};

export default connect(null, {updatePoems})(Item);
