import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, Box } from '@mui/material';

const Table = () => {
	interface type {
		userId: number;
		id: number;
		title: string;
		body: string;
	}
	type idata = type[];

	const [data, setData] = useState<idata>([]);
	const url: string = 'https://jsonplaceholder.typicode.com/posts';

	const fetchData = async () => {
		const data = await fetch(url).then((response) => response.json());
		setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'userId',
			headerName: 'User ID',
			type: 'number',
			width: 90,
		},
		{
			field: 'title',
			headerName: 'Title',
			description: 'This column is not sortable.',
			sortable: false,
			width: 500,
		},
		{
			field: 'body',
			headerName: 'Body',
			description: 'This column is not sortable.',
			sortable: false,
			width: 700,
		},
	];

	const rows: { id: number }[] = data.map((user) => ({
		...user,
	}));

	return (
		<>
			<Container maxWidth='xl' sx={{ mt: 8 }}>
				<Box sx={{ height: 631, width: '100%' }}>
					<DataGrid autoPageSize rows={rows} columns={columns} checkboxSelection disableRowSelectionOnClick />
				</Box>
			</Container>
		</>
	);
};
export default Table;
