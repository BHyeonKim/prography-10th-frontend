import type { ChangeEvent } from 'react';

import Button from '../../../../entities/registration/ui/form/Button';
import FormContainer from '../../../../shared/ui/container/FormContainer';
import Divider from '../../../../shared/ui/divider';
import Typography from '../../../../shared/ui/typographies';

import useRootStore from '../../../../zustand';
import type { Major } from '../../../../zustand/slices/AdditionalInfoFormSlice';

import styles from './additionalInfo.module.css';

const AdditionalInfoForm = () => {
	const { major, setMajor } = useRootStore((state) => state);

	const handleSelectMajor = (e: ChangeEvent<HTMLInputElement>) => {
		setMajor(e.currentTarget.value as Major);
	};

	return (
		<div className={styles.additionalInfo}>
			<Typography.Subtitle>지원 정보 정보</Typography.Subtitle>
			<Divider />
			<p>지원하고자 하는 분야를 선택해주세요</p>
			<FormContainer>
				<p className={styles.required}>지원 분야를 선택해주세요</p>
				<Button
					name="domain"
					value="프론트엔드"
					defaultChecked={major === '프론트엔드'}
					onChange={handleSelectMajor}
				>
					프론트엔드
				</Button>
				<Button
					name="domain"
					value="백엔드"
					defaultChecked={major === '백엔드'}
					onChange={handleSelectMajor}
				>
					백엔드
				</Button>
				<Button
					name="domain"
					value="디자인"
					defaultChecked={major === '디자인'}
					onChange={handleSelectMajor}
				>
					디자인
				</Button>
				<Button
					name="domain"
					value="IOS"
					defaultChecked={major === 'IOS'}
					onChange={handleSelectMajor}
				>
					iOS
				</Button>
				<Button
					name="domain"
					value="안드로이드"
					defaultChecked={major === '안드로이드'}
					onChange={handleSelectMajor}
				>
					안드로이드
				</Button>
				<Button
					name="domain"
					value="Product Owner"
					defaultChecked={major === 'Product Owner'}
					onChange={handleSelectMajor}
				>
					Product Owner
				</Button>
			</FormContainer>
		</div>
	);
};

export default AdditionalInfoForm;
