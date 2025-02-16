import clsx from 'clsx';
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
	return (
		<button
			{...props}
			className={clsx(styles.button, buttonStyle === 'mono' && styles.mono)}
		>
			{children}
		</button>
	);
};

export default GeneralButton;
