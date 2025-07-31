'use client';

import styled, { keyframes } from 'styled-components';
import {FC, useEffect, useState} from 'react';
import {colors, fontSizes, mQuery} from "@/styles/vars";

type HeroProps = {
	images: string[];
	title: string;
	subtitle: string;
};

const fade = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const Wrapper = styled.section`
	position: relative;
	min-height: 500px;
	color: ${colors.text.primary};
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const BackgroundImage = styled.div<{ image: string }>`
	position: absolute;
	inset: 0;
	background: ${({ image }) => `url(${image})`} center center / cover no-repeat;
	z-index: 0;
	filter: brightness(0.4);
	animation: ${fade} 1s ease-in-out;
	transition: background-image 1s ease-in-out;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: ${fontSizes.huge};
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: ${fontSizes.super};
  }
`;

const Subtitle = styled.p`
	font-size: ${fontSizes.large};
	margin-bottom: 2rem;
	line-height: 1.6;
	color: ${colors.text.secondary};

	${mQuery.mobile} {
		font-size: ${fontSizes.medium};
	}
`;

export const Hero: FC<HeroProps> = ({images, title, subtitle}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((i) => (i + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Wrapper>
			<BackgroundImage image={images[index]} />
			<Content>
				<Title>{title}</Title>
				<Subtitle dangerouslySetInnerHTML={{__html: subtitle}}/>
			</Content>
		</Wrapper>
	);
};
