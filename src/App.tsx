import { Route, Routes } from 'react-router';
import WelcomePage from './pages/Welcome';

function App() {
	return (
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route path="registration" />
		</Routes>
	);
}

export default App;
