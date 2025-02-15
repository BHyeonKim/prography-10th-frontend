import type { HTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router';
import styles from './button.module.css';

export type ApplyButtonProps = HTMLAttributes<HTMLAnchorElement> & LinkProps;

const ApplyButton = ({ children, ...props }: ApplyButtonProps) => {
	return (
		<Link {...props} className={styles.applyButton}>
			{children}
		</Link>
	);
};

export default ApplyButton;
