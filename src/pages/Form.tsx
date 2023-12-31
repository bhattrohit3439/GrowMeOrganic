import { useEffect, useState } from 'react';
import { Button, Box, Container, TextField, Typography, Paper } from '@mui/material';
//import { Link } from 'react-router-dom';

const Form = (props: { data: (arg0: boolean) => void }) => {
	const defaultFormData = {
		name: '',
		phoneNumber: '',
		email: '',
	};

	const [user, setUser] = useState(defaultFormData);
	const [isDataProvided, setIsDataProvided] = useState(false);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (user.name === '' || user.phoneNumber === '' || user.email === '') {
			setIsDataProvided(false);
			alert('Please enter all the details.');
		} else {
			setIsDataProvided(true);
			localStorage.setItem('user', JSON.stringify(user));
		}
	};

	useEffect(() => {
		const handleProp = () => {
			props.data(isDataProvided);
		};
		handleProp();
	}, [isDataProvided, props]);

	return (
		<>
			<Container component='main' maxWidth='xs'>
				<Paper
					elevation={3}
					sx={{
						marginTop: 16,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: 2,
					}}
				>
					<Typography component='h1' variant='h4' color='primary'>
						Form
					</Typography>
					<Box component='form' sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='name'
							label='Name'
							name='name'
							autoComplete='name'
							value={user.name}
							onChange={handleInput}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							id='tel'
							label='Phone Number'
							name='phoneNumber'
							autoComplete='phone number'
							value={user.phoneNumber}
							onChange={handleInput}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='email'
							label='Email'
							type='email'
							id='email'
							value={user.email}
							autoComplete='current-password'
							onChange={handleInput}
						/>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2, p: 1 }}
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</Box>
				</Paper>
			</Container>
		</>
	);
};
export default Form;
