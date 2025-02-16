import clsx from 'clsx';
import Typography from '../../../../../shared/ui/typographies';
import type { ParagraphProps } from '../../../../../shared/ui/typographies';
import styles from './welcomeSubtitle.module.css';

export type WelcomeSubtitleProps = ParagraphProps;

const WelcomeSubtitle = ({ children, ...props }: WelcomeSubtitleProps) => {
	return (
		<Typography.Subtitle
			{...props}
			className={clsx(styles.welcome, props.className)}
		>
			{children}
		</Typography.Subtitle>
	);
};

export default WelcomeSubtitle;
