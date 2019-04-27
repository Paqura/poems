import React from 'react';
import {DefaultList} from 'src/components/shared/styles';
import Item from './Item';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const
	List = (props: any) => (
		<DefaultList>
			<header>
				<h3>Комментарии:</h3>
			</header>

			{!props.data.length && <div>Комметариев ещё нет</div>}

			<TransitionGroup>
				{props.data.map((comment: any) => (
					<CSSTransition
						key={comment._id}
						timeout={200}
						classNames="item"
					>
						<Item key={comment._id} data={comment} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</DefaultList>
	);

export default List;
