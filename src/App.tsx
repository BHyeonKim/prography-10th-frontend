import { Navigate, Route, Routes } from 'react-router';
import CompletePage from './pages/Compelete';
import AdditionalInfoForm from './pages/Registration/Form/AdditionalInfo';
import BasicInfoForm from './pages/Registration/Form/BasicInfo';
import PrivacyPolicyForm from './pages/Registration/Form/PrivacyPolicy';
import RegistrationLayout from './pages/Registration/Layout';
import WelcomePage from './pages/Welcome';

function App() {
	return (
		<Routes>
			<Route index element={<WelcomePage />} />
			<Route path="registration" element={<RegistrationLayout />}>
				<Route index element={<Navigate to="1" />} />
				<Route path="1" element={<PrivacyPolicyForm />} />
				<Route path="2" element={<BasicInfoForm />} />
				<Route path="3" element={<AdditionalInfoForm />} />
			</Route>
			<Route path="complete" element={<CompletePage />} />
		</Routes>
	);
}

export default App;
