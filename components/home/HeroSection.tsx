'use client';

import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import {colors} from "@/styles/vars";

const images = [
	'/assets/robots/Peck.webp',
	'/assets/teamPicture.webp',
	'/assets/robots/Willson.webp',
];

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
	//padding: 2rem;
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
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
	font-size: 1.2rem;
	margin-bottom: 2rem;
	line-height: 1.6;
	color: ${colors.text.secondary};

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

export default function HeroSection() {
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
				<Title>Ninjas #4744</Title>
				<Subtitle>
					We're the robotics team of Amal Hadera high school since 2013.<br/>
					We're a passionate robotics team competing in FIRST. With creativity, innovation, and teamwork, we build more than robots – we build future leaders.
				</Subtitle>
			</Content>
		</Wrapper>
	);
}
