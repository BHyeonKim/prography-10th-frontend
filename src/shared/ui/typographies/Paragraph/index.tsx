import type { HTMLAttributes } from 'react';
import styles from './paragraph.module.css';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, ...props }: ParagraphProps) => {
	return (
		<p className={styles.paragraph} {...props}>
			{children}
		</p>
	);
};

export default Paragraph;
