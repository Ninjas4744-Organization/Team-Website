"use client";

import {Box, Center, Heading, Image as ChakraImage, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import Carousel from "@/components/Carousel/Index";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Sponsors from "@/constants/Sponsors";
import {AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot} from "@/components/ui/accordion";
import {TeamHighlights} from "@/components/home/TeamHighlights";
import HeroSection from "@/components/home/HeroSection";
import styled from "styled-components";

const HomeWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<HeroSection />
			<TeamHighlights/>
			<Box alignItems={"center"} justifyContent={"center"} justifyItems={"center"} mb={10} mt={5} w={"100%"}>
				<Center>
					<VStack spaceY={2}>
						<VStack>
							<Heading size={"4xl"}>Our supporters</Heading>
							<Text color={"gray.400"} textAlign={"center"}>
								Key companies who provide us everything we need
							</Text>
						</VStack>
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
					</VStack>
				</Center>
			</Box>
		</HomeWrapper>
	);
};

export default Home;
