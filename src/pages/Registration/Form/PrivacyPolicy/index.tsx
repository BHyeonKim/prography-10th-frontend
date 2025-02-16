import type { MouseEvent } from 'react';
import Button from '../../../../entities/registration/ui/form/Button';
import FormContainer from '../../../../shared/ui/container/FormContainer';
import Divider from '../../../../shared/ui/divider';
import Typography from '../../../../shared/ui/typographies';
import useRootStore from '../../../../zustand';

import styles from './privacyPolicy.module.css';

const PrivacyPolicyForm = () => {
	const { setGrant, granted } = useRootStore((state) => state);

	const handleSelect = (e: MouseEvent<HTMLInputElement>) => {
		if (e.currentTarget.value === 'true') {
			setGrant(true);
		} else {
			setGrant(false);
		}
	};

	return (
		<div className={styles.privacyPolicyForm}>
			<Typography.Subtitle>개인정보 수집 동의</Typography.Subtitle>
			<Divider />
			<p>프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다</p>
			<FormContainer>
				<div className={styles.notice}>
					<p>수집 목적: Prography 10기 리구르팅 과정 및 결과 안내</p>
					<p>수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보</p>
					<p>보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기</p>
				</div>
				<p className={styles.required}>
					개인정보 수집여부 동의 여부를 체크해주세요.
				</p>
				<fieldset>
					<Button
						name="privacy"
						value="true"
						onClick={handleSelect}
						defaultChecked={granted}
					>
						개인정보 수집에 동의합니다.
					</Button>
					<Button
						name="privacy"
						value="false"
						onClick={handleSelect}
						defaultChecked={granted === false}
					>
						개인정보 수집에 동의합니다.
					</Button>
				</fieldset>
			</FormContainer>
		</div>
	);
};

export default PrivacyPolicyForm;
