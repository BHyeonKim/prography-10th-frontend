import type { HTMLAttributes } from 'react';
import styles from './button.module.css';

export type GeneralButtonProps = HTMLAttributes<HTMLButtonElement> & {
	buttonStyle?: 'default' | 'mono';
};

const GeneralButton = ({
	children,
	buttonStyle = 'default',
	...props
}: GeneralButtonProps) => {
	const classNames = `${styles.button} ${buttonStyle === 'mono' ? styles.mono : ''}`;

	return (
		<button {...props} className={classNames}>
			{children}
		</button>
	);
};

export default GeneralButton;
