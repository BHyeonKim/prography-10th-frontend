import clsx from 'clsx';
import styles from './ball.module.css';

export type SmallBallProps = { isActive?: boolean; value?: number };

const SmallBall = ({ isActive, value }: SmallBallProps) => {
	return (
		<div className={clsx(styles.ball, isActive && styles.active)}>{value}</div>
	);
};

export default SmallBall;
