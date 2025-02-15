import { Route, Routes } from 'react-router';
import BasicInfoForm from './pages/Registration/Form/BasicInfo';
import PrivacyPolicyForm from './pages/Registration/Form/PrivacyPolicy';
import RegistrationLayout from './pages/Registration/Layout';
import WelcomePage from './pages/Welcome';

function App() {
	return (
		<Routes>
			<Route index element={<WelcomePage />} />
			<Route path="registration" element={<RegistrationLayout />}>
				<Route index path="1" element={<PrivacyPolicyForm />} />
				<Route path="2" element={<BasicInfoForm />} />
				<Route path="3" />
				<Route path="complete" />
			</Route>
		</Routes>
	);
}

export default App;
