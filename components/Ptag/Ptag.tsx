import PtagProps from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'm', children, ...props }: PtagProps): JSX.Element => {
	return (
		<p className={cn(styles.p, {
			[styles.small]: size == 's',
			[styles.medium]: size == 'm',
			[styles.large]: size == 'l'
		})} {...props}>
			{children}
		</p>
	);
};