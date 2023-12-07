import { useEffect } from 'react';

const Table = () => {
	//const [data, setData] = useState([{}]);
	const url: string = 'https://jsonplaceholder.typicode.com/posts';

	const fetchData = async () => {
		const data = await fetch(url).then((response) => response.json());
		console.log(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div>Table</div>
		</>
	);
};
export default Table;
