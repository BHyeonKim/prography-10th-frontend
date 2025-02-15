import Button from '../../../../entities/registration/ui/form/Button';
import Divider from '../../../../shared/ui/divider';
import Typography from '../../../../shared/ui/typographies';

import styles from './privacyPolicy.module.css';

const PrivacyPolicyForm = () => {
	return (
		<div className={styles.privacyPolicyForm}>
			<Typography.Subtitle>개인정보 수집 동의</Typography.Subtitle>
			<Divider />
			<p>프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다</p>
			<div className={styles.formContainer}>
				<div>
					<p>수집 목적: Prography 10기 리구르팅 과정 및 결과 안내</p>
					<p>수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보</p>
					<p>보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기</p>
				</div>
				<p>개인정보 수집여부 동의 여부를 체크해주세요.✨</p>
				<fieldset>
					<Button name="privacy" value="true">
						개인정보 수집에 동의합니다.
					</Button>
					<Button name="privacy" value="false">
						개인정보 수집에 동의합니다.
					</Button>
				</fieldset>
			</div>
		</div>
	);
};

export default PrivacyPolicyForm;
