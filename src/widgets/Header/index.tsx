import type { HTMLAttributes } from 'react';

import styles from './header.module.css';

type HeaderProps = HTMLAttributes<HTMLElement>;

const Header = ({ children, ...props }: HeaderProps) => {
	return (
		<header {...props} className={styles.header}>
			{children}
		</header>
	);
};

export default Header;
