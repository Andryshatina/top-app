import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: 's' | 'm';
	color?: 'gray' | 'red' | 'ghoust' | 'primary' | 'green';
	href?: string;
}