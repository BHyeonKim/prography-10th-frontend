import {
	Link as RouterLink,
	type LinkProps as RouterLinkProps,
} from 'react-router';
import Typography from '../../../../shared/ui/typographies';
import styles from './link.module.css';

export type LinkProps = RouterLinkProps;

const Link = ({ children, ...props }: LinkProps) => {
	const classNames = props.className
		? `${styles.link} ${props.className}`
		: styles.link;

	return (
		<RouterLink {...props} className={styles.link}>
			<Typography.Paragraph className={classNames}>
				{children}
			</Typography.Paragraph>
		</RouterLink>
	);
};

export default Link;
