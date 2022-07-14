import { KeyboardEvent, useEffect, useState } from 'react';
import RatingProps from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import RatingIcon from './Rating.svg';

export const Rating = ({ isAditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<RatingIcon className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isAditable
				})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
					tabIndex={isAditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGAElement>) => isAditable && handleSpace(i + 1, e)}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number): void => {
		if (!isAditable) return;
		constructRating(i);
	};

	const onClick = (i: number): void => {
		if (!isAditable || !setRating) return;
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code != 'Space' || !setRating) return;
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};