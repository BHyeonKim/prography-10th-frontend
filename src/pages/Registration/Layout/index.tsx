import { Outlet, useLocation, useNavigate } from 'react-router';
import GeneralButton from '../../../shared/ui/button/GeneralButton';
import Header from '../../../widgets/Header';
import ProgressBar from '../../../widgets/ProgressBar';
import useRootStore from '../../../zustand';
import styles from './layout.module.css';

const TOTAL_STEP = 3;

const RegistrationLayout = () => {
	const grantedStep = useRootStore((state) => state.step);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const tokenizedPathname = pathname.split('/');
	const currentStep = Number(tokenizedPathname[tokenizedPathname.length - 1]);

	const handlePrevButton = async () => {
		if (currentStep <= 1) return;

		await navigate(`/registration/${currentStep - 1}`);
	};

	const handleNextButton = async () => {
		if (currentStep > TOTAL_STEP) return;
		if (currentStep >= grantedStep) {
			alert('필수 입력항목을 입력해주세요.');
			return;
		}

		if (currentStep === TOTAL_STEP) {
			await navigate('/complete');
		} else {
			await navigate(`/registration/${currentStep + 1}`);
		}
	};

	return (
		<div className={styles.registrationLayout}>
			<Header>Prography 10기 지원서</Header>
			<ProgressBar currentStep={currentStep} totalStep={TOTAL_STEP} />
			<main className={styles.outlet}>
				<Outlet />
			</main>
			<div className={styles.buttonContainer}>
				<GeneralButton buttonStyle="mono" onClick={handlePrevButton}>
					뒤로
				</GeneralButton>
				<GeneralButton onClick={handleNextButton}>다음</GeneralButton>
			</div>
		</div>
	);
};

export default RegistrationLayout;
