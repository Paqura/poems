import React, {useRef, useEffect} from 'react';
import Item from './Item';
import styles from './styles';

type TPoem = {
	_id: string,
	title: string,
	body: string,
	imgPath: string,
	views: [string],
};

type TProps = {
	data: TPoem[],
};

const
	List: React.FC<TProps> = (props: TProps) => {
		const listRef = useRef<HTMLUListElement>(null);

		useEffect(() => {
			console.log(listRef);
		},[]);

		return (
			<styles.List ref={listRef}>
				{props.data.map((it: TPoem) => (
					<Item
						key={it._id}
						data={it}
					/>
				))}
			</styles.List>
		);
	};

export default List;
