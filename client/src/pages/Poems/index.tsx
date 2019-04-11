import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import Container from 'src/components/shared/Container';

const
	PoemsPage: React.FC<any> = () => {
		const [poems, setPoems] = useState([]);

		const fetchPoems = async () => await axios.get('/api/poems')
			.then((response: any) => setPoems([].concat(response.data)))
			.catch(err => console.error(err));

		useEffect((): void => {
			fetchPoems().then();
		}, []);

		return (
			<Container>
				<List data={poems} />
			</Container>
		);
	};

export default PoemsPage;
