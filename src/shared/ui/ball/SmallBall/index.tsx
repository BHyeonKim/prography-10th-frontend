import styles from './ball.module.css';

export type SmallBallProps = { isActive?: boolean; value?: number };

const SmallBall = ({ isActive, value }: SmallBallProps) => {
	const classNames = isActive
		? `${styles.ball} ${isActive ? styles.active : ''}`
		: styles.ball;
	return <div className={classNames}>{value}</div>;
};

export default SmallBall;
