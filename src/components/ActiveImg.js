import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const Wrapper = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.85);
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		margin: 1em auto 0;
		height: 90%;
		width: auto;
		object-fit: cover;
	}

	p {
		color: rgba(255, 255, 255, 0.6);
		font-family: 'Arial', sans-serif;
	}
`;

const ActiveImg = ({
	isOpen,
	setOpen,
	pictures,
	activeIndex,
	setActiveIndex,
}) => {
	const nextPicture = useCallback(() => {
		if (activeIndex + 1 === pictures.length) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	}, [activeIndex]);

	const previousPicture = useCallback(() => {
		if (activeIndex === 0) {
			setActiveIndex(pictures.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	}, [activeIndex]);

	const handleKey = useCallback(
		(e) => {
			console.log(`user has pressed ${e.key}`);
			if (e.key === 'ArrowLeft') {
				previousPicture();
				console.log(activeIndex);
			}
			if (e.key === 'ArrowRight') {
				nextPicture();
				console.log(activeIndex);
			}
		},
		[nextPicture, previousPicture]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKey);
		return () => document.removeEventListener('keydown', handleKey);
	}, [handleKey]);

	return (
		<Wrapper isOpen={isOpen} tabIndex={0} onKeyDown={handleKey}>
			<img
				src={pictures[activeIndex].src}
				id={pictures[activeIndex].id}
				alt={pictures[activeIndex].alt}
			/>
			<p>{`Picture ${activeIndex + 1} of ${pictures.length}`}</p>
			<CloseButton onClick={() => setOpen(false)} />

			<NextButton onClick={nextPicture} />

			<PrevButton onClick={previousPicture} />
		</Wrapper>
	);
};

export default ActiveImg;
