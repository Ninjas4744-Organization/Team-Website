'use client';

import styled, { keyframes } from 'styled-components';
import {FC, ReactNode, useEffect, useState} from 'react';
import {colors, fontSizes, mQuery} from "@/styles/vars";

type HeroProps = {
	images: string[];
	title: ReactNode;
	subtitle: string;
};

const fade = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const Wrapper = styled.section`
	position: relative;
	min-height: clamp(31rem, 66vh, 42rem);
	color: ${colors.text.primary};
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	background: ${colors.accent_background};
`;

const BackgroundImage = styled.div<{ image: string }>`
	position: absolute;
	inset: 0;
	background: ${({ image }) => `url(${image})`} center center / cover no-repeat;
	z-index: 0;
	filter: brightness(0.5) saturate(0.8);
	transform: scale(1.015);
	animation: ${fade} 1s ease-in-out;
	transition: background-image 1s ease-in-out;
`;

const Overlay = styled.div`
	position: absolute;
	inset: 0;
	z-index: 0;
	background:
		linear-gradient(180deg, rgba(17, 31, 40, 0.32), ${colors.overlay}),
		radial-gradient(circle at 50% 34%, rgba(98, 122, 139, 0.08), transparent 58%);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
	max-width: 900px;
	padding: 2rem 1.25rem;
	animation: ${fade} 500ms 100ms both ease-out;
`;

const Title = styled.h1`
	font-family: "Avenir Next", "Segoe UI", sans-serif;
  font-size: ${fontSizes.huge};
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
	text-shadow: 0 0.2rem 1.6rem rgba(0, 0, 0, 0.36);

  @media (max-width: 768px) {
    font-size: ${fontSizes.super};
  }

	> ._wordmark {
		display: block;
		width: min(100%, 36rem);
		height: auto;
		margin: 0 auto;
		filter: drop-shadow(0 0.8rem 1.4rem rgba(0, 0, 0, 0.36));
	}
`;

const Subtitle = styled.p`
	font-size: ${fontSizes.large};
	margin: 0 auto;
	max-width: 46rem;
	padding: 0.9rem 1.15rem;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 14px;
	background: rgba(20, 37, 48, 0.38);
	box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.12);
	line-height: 1.6;
	color: ${colors.text.primary};
	font-weight: 600;

	${mQuery.mobile} {
		font-size: ${fontSizes.medium};
	}
`;

export const Hero: FC<HeroProps> = ({images, title, subtitle}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (images.length === 0) {
			return;
		}

		const interval = setInterval(() => {
			setIndex((i) => (i + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<Wrapper>
			<BackgroundImage image={images[index]} />
			<Overlay />
			<Content>
				<Title>{title}</Title>
				<Subtitle dangerouslySetInnerHTML={{__html: subtitle}}/>
			</Content>
		</Wrapper>
	);
};
