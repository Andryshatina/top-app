import TagProps from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ children, size = 'm', color = 'ghoust', href, className, ...props }: TagProps): JSX.Element => {
	return (
		<div className={cn(styles.tag, className, {
			[styles.small]: size == 's',
			[styles.medium]: size == 'm',
			[styles.ghoust]: color == 'ghoust',
			[styles.gray]: color == 'gray',
			[styles.red]: color == 'red',
			[styles.primary]: color == 'primary',
			[styles.green]: color == 'green',
		})} {...props}>
			{href ? <a href={href}>{children}</a>
				: <>{children}</>

			}
		</div>
	);
};