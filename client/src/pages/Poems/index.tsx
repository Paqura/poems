import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from './List';
import Container from 'src/components/shared/Container';

const
	PoemsPage = () => {
		const [poems, setPoems] = useState([]);

		const fetchPoems = async () =>
			await axios.get('/api')
				.then((response: any) => setPoems([].concat(response.data)))
				.catch(err => console.error(err))

		useEffect((): any => {
			fetchPoems();
		}, []);

		return (
		<Container>
			PoemsPage
			<List data={poems} />
		</Container>)};

export default PoemsPage;
