import SmallBall from '../../shared/ui/ball/SmallBall';
import styles from './progressBar.module.css';

export type ProgressBarProps = { currentStep: number; totalStep: number };

const ProgressBar = ({ currentStep, totalStep }: ProgressBarProps) => {
	return (
		<div className={styles.progressBar}>
			{Array.from({ length: totalStep }, (_, index) => (
				<>
					<SmallBall
						value={index + 1}
						isActive={index < currentStep}
						key={`ball-${index + 1}`}
					/>
					{index < totalStep - 1 && (
						<div
							className={styles.connector}
							data-active={index < currentStep - 1}
						/>
					)}
				</>
			))}
		</div>
	);
};

export default ProgressBar;
