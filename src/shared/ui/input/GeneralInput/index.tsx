import type { InputHTMLAttributes } from 'react';
import styles from './generalInput.module.css';

type GeneralInputProps = InputHTMLAttributes<HTMLInputElement>;

const GeneralInput = (props: GeneralInputProps) => {
	return <input type="text" className={styles.generalInput} {...props} />;
};

export default GeneralInput;
