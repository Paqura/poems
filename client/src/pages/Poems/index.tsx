import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import settings from 'src/settings';
import Container from 'src/components/shared/Container';

const
	PoemsPage: React.FC<any> = () => {
		const [poems, setPoems] = useState([]);

		const fetchPoems = async () => {
			try {
				const {data} = await axios.get(settings.POEMS_API.GET_ALL);
				setPoems(data);
			} catch(error) {
				console.error(error);
			}
		};

		useEffect((): void => {
			fetchPoems();
		}, []);

		return (
			<Container>
				<List data={poems} />
			</Container>
		);
	};

export default PoemsPage;
