"use client";

import {Center, Image as ChakraImage, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import Carousel from "@/components/ui/Carousel";
import CarouselCard from "@/components/ui/CarouselCard";
import Sponsors from "@/constants/Sponsors";
import {AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot} from "@/components/ui/accordion";
import {TeamHighlights} from "@/components/home/TeamHighlights";
import styled from "styled-components";
import {colors, fontSizes} from "@/styles/vars";
import {Hero} from "@/components/ui/Hero";

const HomeWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const SponsorsWrapper = styled.div`
	width: 100%;
	margin: 2.5rem 0 1.25rem;
	justify-content: center;
	text-align: center;
	
	> ._title {
		font-size: ${fontSizes.super};
		font-weight: 600;
		color: ${colors.text.primary};
	}
	
	> ._subtitle {
		font-size: ${fontSizes.large};
		color: ${colors.text.secondary};
		margin-top: 0.5rem;
	}
`;

const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<Hero
				images={[
					"/assets/robots/Peck.webp",
					"/assets/teamPicture.webp",
					"/assets/robots/Willson.webp"
				]}
				title="Ninjas #4744"
				subtitle="We're the robotics team of Amal Hadera high school since 2013.<br/>
					We're a passionate robotics team competing in FIRST. With creativity, innovation, and teamwork, we build more than robots – we build future leaders." />
			<TeamHighlights/>
			<SponsorsWrapper>
				<h2 className="_title">Our supporters</h2>
				<p className="_subtitle">Key companies who provide us everything we need</p>
				<Carousel>
					{Sponsors.map((item, index) => (
						<CarouselCard key={index} cardDescription={item.description} cardImage={item.logo} cardTitle={item.title}/>
					))}
				</Carousel>
				<AccordionRoot collapsible defaultValue={["a"]} hideFrom={"lg"} rounded={"sm"} variant={"subtle"} w={"100%"}>
					{Sponsors.map((item, index) => (
						<AccordionItem key={index} value={item.value} w={"100%"}>
							<AccordionItemTrigger fontSize={"sm"} fontWeight={"medium"} p={2} w={"100%"}>
								{item.title}
							</AccordionItemTrigger>
							<AccordionItemContent p={2}>
								<Center>
									<VStack>
										<ChakraImage asChild height={"auto"} objectFit={"cover"} w={"80%"}>
											<Image alt={`${item.title}`} src={item.logo}/>
										</ChakraImage>
										<VStack>
											<Text>{item.description}</Text>
										</VStack>
									</VStack>
								</Center>
							</AccordionItemContent>
						</AccordionItem>
					))}
				</AccordionRoot>
			</SponsorsWrapper>
		</HomeWrapper>
	);
};

export default Home;
