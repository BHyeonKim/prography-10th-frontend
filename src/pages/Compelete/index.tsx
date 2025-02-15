import { useNavigate } from 'react-router';
import GeneralButton from '../../shared/ui/button/GeneralButton';
import Typography from '../../shared/ui/typographies';
import Header from '../../widgets/Header';
import styles from './complete.module.css';

const CompletePage = () => {
	const navigate = useNavigate();

	const handleClick = async () => {
		await navigate('/');
	};

	return (
		<div className={styles.page}>
			<Header>Prography 10기 지원서</Header>
			<main>
				<div className={styles.ball}>✓</div>
				<Typography.Subtitle>지원이 완료되었습니다!</Typography.Subtitle>
				<div>
					<Typography.Paragraph>
						프로그라피 10기 지원해주셔서 감사합니다.
					</Typography.Paragraph>
					<Typography.Paragraph>
						서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
					</Typography.Paragraph>
				</div>
				<GeneralButton onClick={handleClick}>홈으로 돌아가기</GeneralButton>
			</main>
		</div>
	);
};

export default CompletePage;
