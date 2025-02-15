import Button from '../../../../entities/registration/ui/form/Button';
import FormContainer from '../../../../shared/ui/container/FormContainer';
import Divider from '../../../../shared/ui/divider';
import Typography from '../../../../shared/ui/typographies';

import styles from './additionalInfo.module.css';

const AdditionalInfoForm = () => {
	return (
		<div className={styles.additionalInfo}>
			<Typography.Subtitle>지원 정보 정보</Typography.Subtitle>
			<Divider />
			<p>지원하고자 하는 분야를 선택해주세요</p>
			<FormContainer>
				<p className={styles.required}>지원 분야를 선택해주세요</p>
				<Button name="domain" value="프론트엔드">
					프론트엔드
				</Button>
				<Button name="domain" value="백엔드">
					백엔드
				</Button>
				<Button name="domain" value="디자인">
					디자인
				</Button>
				<Button name="domain" value="IOS">
					iOS
				</Button>
				<Button name="domain" value="안드로이드">
					안드로이드
				</Button>
				<Button name="domain" value="Product Owner">
					Product Owner
				</Button>
			</FormContainer>
		</div>
	);
};

export default AdditionalInfoForm;
