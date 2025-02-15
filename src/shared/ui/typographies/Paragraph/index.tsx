import type { HTMLAttributes } from 'react';
import styles from './paragraph.module.css';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, ...props }: ParagraphProps) => {
	const classNames = props.className
		? `${styles.paragraph} ${props.className ?? ''}`
		: styles.paragraph;

	return (
		<p {...props} className={classNames}>
			{children}
		</p>
	);
};

export default Paragraph;
