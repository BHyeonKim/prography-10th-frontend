import type { HTMLAttributes } from 'react';
import styles from './formContainer.module.css';

type FormContainerProps = HTMLAttributes<HTMLDivElement>;

const FormContainer = ({ children, ...props }: FormContainerProps) => {
	return (
		<div {...props} className={styles.formContainer}>
			{children}
		</div>
	);
};

export default FormContainer;
