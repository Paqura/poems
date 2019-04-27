import React, {useState, useEffect} from 'react';
import UI from './styles';
import VectorEye from './VectorEye';
import VectorLike from './VectorLike';
import Link from 'src/components/shared/DefaultLink';
import MarginBlock from 'src/components/shared/MarginBlock';
import Button from 'src/components/shared/Button';

type TView = {
	data: {
		_id: string,
		views: string[],
		favorites: string[],
	},

	currentUserId: string,
	updatePoems: Function,
};

export default React.memo((props: TView) => {
	const currentUserId = props.currentUserId;
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		if(!currentUserId) return;

		const isFavoritePoem = Boolean(
			props.data.favorites.find((favoriteId: string) => favoriteId === currentUserId),
		);

		setIsFavorite(isFavoritePoem);
	}, []);

	const toggleFavoriteState = () => {
		setIsFavorite(!isFavorite);

		const newFavoritesList = !isFavorite
			? [...props.data.favorites, currentUserId]
			: props.data.favorites.filter(favoriteId => favoriteId !== currentUserId);

		props.updatePoems({
			...props.data,
			favorites: newFavoritesList,
		});
	};

	return (
		<UI.View>
			<MarginBlock customStyle={{marginRight: 'auto'}}>
				<UI.Comments
					as={Link}
					to={`/poems/${props.data._id}`}
				>
					Подробнее
				</UI.Comments>
			</MarginBlock>

			<MarginBlock right={16}>
				<Button onClick={toggleFavoriteState}>
					<VectorLike className={isFavorite ? '_is-active' : ''} />
				</Button>
			</MarginBlock>

			<MarginBlock
				hasInlineStyle
				customStyle={{alignItems: 'center'}}
			>
				<VectorEye />
				<UI.Counter>{props.data.views.length}</UI.Counter>
			</MarginBlock>
		</UI.View>
	);
});
