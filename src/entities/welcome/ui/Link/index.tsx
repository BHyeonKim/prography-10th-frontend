import clsx from 'clsx';
import {
	Link as RouterLink,
	type LinkProps as RouterLinkProps,
} from 'react-router';
import Typography from '../../../../shared/ui/typographies';
import styles from './link.module.css';

export type LinkProps = RouterLinkProps;

const Link = ({ children, ...props }: LinkProps) => {
	return (
		<RouterLink {...props} className={styles.link}>
			<Typography.Paragraph className={clsx(styles.link, props.className)}>
				{children}
			</Typography.Paragraph>
		</RouterLink>
	);
};

export default Link;
