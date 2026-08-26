import React from "react";
import Image from "next/image";
import styled from "styled-components";
import {colors, fontSizes, mQuery} from "@/styles/vars";

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
	background: ${colors.surface};
	border-radius: 18px;
	width: 83.3333%;
	min-height: 300px;
	border: 1px solid ${colors.border};
	box-sizing: border-box;
	box-shadow: 0 1.25rem 2.5rem rgba(22, 38, 49, 0.15);
`;

const Content = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	padding: 16px;
	gap: 1.25rem;

	${mQuery.mobile} {
		flex-direction: column;
	}
`;

const ImageWrapper = styled.div`
	width: 60%;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 12px;
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
	color: ${colors.text.primary};
	font-size: ${fontSizes.super};
	font-weight: bold;
	margin-bottom: 0.5rem;
	width: 100%;
	text-align: start;
`;

const Description = styled.p`
	color: ${colors.text.secondary};
	font-size: ${fontSizes.medium};
	line-height: 1.6;
	margin-top: 1rem;
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
