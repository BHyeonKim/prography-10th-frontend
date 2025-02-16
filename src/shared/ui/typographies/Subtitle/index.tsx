import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import styles from './subTitle.module.css';

export type SubtitleProps = HTMLAttributes<HTMLHeadingElement>;

const Subtitle = ({ children, ...props }: SubtitleProps) => {
	return (
		<h2 {...props} className={clsx(styles.subTitle, props.className)}>
			{children}
		</h2>
	);
};

export default Subtitle;
