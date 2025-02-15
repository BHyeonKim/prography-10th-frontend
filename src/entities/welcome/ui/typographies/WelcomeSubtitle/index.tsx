import Typography from '../../../../../shared/ui/typographies';
import type { ParagraphProps } from '../../../../../shared/ui/typographies';
import styles from './welcomeSubtitle.module.css';

export type WelcomeSubtitleProps = ParagraphProps;

const WelcomeSubtitle = ({ children, ...props }: WelcomeSubtitleProps) => {
	const classNames = props.className
		? `${styles.welcome} ${props.className ?? ''}`
		: styles.welcome;

	return (
		<Typography.Subtitle {...props} className={classNames}>
			{children}
		</Typography.Subtitle>
	);
};

export default WelcomeSubtitle;
