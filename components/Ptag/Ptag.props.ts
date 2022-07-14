import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 's' | 'm' | 'l',
	children: ReactNode
}