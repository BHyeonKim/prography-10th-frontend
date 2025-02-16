import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import styles from './paragraph.module.css';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, ...props }: ParagraphProps) => {
	return (
		<p {...props} className={clsx(styles.paragraph, props.className)}>
			{children}
		</p>
	);
};

export default Paragraph;
