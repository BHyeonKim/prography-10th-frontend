import type { ChangeEvent } from 'react';
import FormContainer from '../../../../shared/ui/container/FormContainer';
import Divider from '../../../../shared/ui/divider';
import GeneralInput from '../../../../shared/ui/input/GeneralInput';
import Typography from '../../../../shared/ui/typographies';
import useRootStore from '../../../../zustand';

import styles from './basicInfo.module.css';

const BasicInfoForm = () => {
	const { name, email, phone, setName, setEmail, setPhone } = useRootStore(
		(state) => state,
	);

	const handleName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value);
	};

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
		setPhone(e.currentTarget.value);
	};

	return (
		<div className={styles.basicInfo}>
			<Typography.Subtitle>기본 정보</Typography.Subtitle>
			<Divider />
			<p>연락 가능한 정보를 입력해주세요</p>
			<FormContainer>
				<p className={styles.required}>성함을 입력해주세요</p>
				<GeneralInput name="name" onChange={handleName} value={name} />
			</FormContainer>
			<FormContainer>
				<p className={styles.required}>이메일 주소를 입력해주세요</p>
				<GeneralInput
					name="email"
					placeholder="예시 : prography@gmail.com"
					onChange={handleEmail}
					value={email}
				/>
			</FormContainer>
			<FormContainer>
				<p className={styles.required}>휴대폰 번호를 입력해주세요</p>
				<GeneralInput
					name="phone"
					placeholder="예시 : 010-1234-5678"
					onChange={handlePhone}
					value={phone}
				/>
			</FormContainer>
		</div>
	);
};

export default BasicInfoForm;
