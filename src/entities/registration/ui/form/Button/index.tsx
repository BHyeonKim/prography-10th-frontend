import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import styles from './button.module.css';

type ButtonProps = InputHTMLAttributes<HTMLInputElement> & {
	children?: string;
};

const Button = ({ checked, children, ...props }: ButtonProps) => {
	return (
		<label className={clsx(styles.buttonContainer, checked && styles.active)}>
			<div>
				<input type="radio" {...props} />
			</div>
			<p>{children}</p>
		</label>
	);
};

export default Button;
