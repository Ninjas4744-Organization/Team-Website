import React from "react";
import Image from "next/image";
import styled from "styled-components";
import {colors, fontSizes} from "@/styles/vars";

interface CarouselCardProps {
	cardTitle: string;
	cardDescription: string;
	cardImage: string;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const CardContainer = styled.div`
	display: flex;
	background-color: ${colors.background};
	border-radius: 0.5rem;
	width: 83.3333%;
	min-height: 300px;
	border: 1px solid ${colors.border};
	box-sizing: border-box;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	padding: 16px;
	gap: 1.25rem;
`;

const ImageWrapper = styled.div`
	width: 60%;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 0.5rem;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
`;

const Title = styled.h2`
	color: white;
	font-size: ${fontSizes.super};
	font-weight: bold;
	margin-bottom: 0.5rem;
	width: 100%;
	text-align: start;
`;

const Description = styled.p`
	color: white;
	font-size: ${fontSizes.medium};
	margin-top: 2.5rem;
	text-align: start;
`;

export const CarouselCard: React.FC<CarouselCardProps> = ({ cardTitle, cardDescription, cardImage }) => {
	return (
		<Wrapper>
			<CardContainer>
				<Content>
					<ImageWrapper>
						<Image alt={`${cardTitle}-${cardDescription}`} src={cardImage} />
					</ImageWrapper>
					<TextWrapper>
						<Title>{cardTitle}</Title>
						<Description>{cardDescription}</Description>
					</TextWrapper>
				</Content>
			</CardContainer>
		</Wrapper>
	);
};

export default CarouselCard;
