import Form from './pages/Form';
import SecondPage from './pages/SecondPage';
import { useState } from 'react';

function App() {
	const [userData, setUseData] = useState(false);
	const pullUser = (data: boolean) => {
		setUseData(data);
	};

	return (
		<>
			<div>{!userData ? <Form data={pullUser} /> : <SecondPage />}</div>
		</>
	);
}

export default App;
