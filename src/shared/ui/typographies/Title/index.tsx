import type { HTMLAttributes } from 'react';
import styles from './title.module.css';

export type TitleProps = HTMLAttributes<HTMLHeadingElement>;

const Title = ({ children, ...props }: TitleProps) => {
	return (
		<h1 className={styles.title} {...props}>
			{children}
		</h1>
	);
};

export default Title;
