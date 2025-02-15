import type { HTMLAttributes } from 'react';
import styles from './subTitle.module.css';

export type SubtitleProps = HTMLAttributes<HTMLHeadingElement>;

const Subtitle = ({ children, ...props }: SubtitleProps) => {
	const classNames = props.className
		? `${styles.subTitle} ${props.className ?? ''}`
		: styles.subTitle;

	return (
		<h2 {...props} className={classNames}>
			{children}
		</h2>
	);
};

export default Subtitle;
