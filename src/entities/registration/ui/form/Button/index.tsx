import clsx from 'clsx';
import type { HTMLAttributes, InputHTMLAttributes } from 'react';
import styles from './button.module.css';

type ButtonProps = HTMLAttributes<HTMLLabelElement> &
	Pick<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'name' | 'value'>;

const Button = ({ name, checked, value, ...props }: ButtonProps) => {
	return (
		<label className={clsx(styles.buttonContainer, checked && styles.active)}>
			<div>
				<input type="radio" name={name} checked={checked} value={value} />
			</div>
			<p>{props.children}</p>
		</label>
	);
};

export default Button;
