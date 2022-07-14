import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.wrapper)} {...props}>
			<div >OwlTop © 2021 - {format(new Date(), 'yyyy')} All the rights are reserved</div>
			<a href='#' target='_blank'>User agreement</a>
			<a href='#' target='_blank'>Privacy policy</a>
		</footer>
	);
};