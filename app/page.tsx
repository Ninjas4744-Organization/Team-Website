"use client";

import {Box, Center, Container, Flex, Group, Heading, Image as ChakraImage, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import Willson from "@/public/assets/robots/Willson.webp";
import Carousel from "@/components/Carousel/Index";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Sponsors from "@/constants/Sponsors";
import {AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot} from "@/components/ui/accordion";
import {TeamHighlights} from "@/components/TeamHighlights";


/**
 * Home Component
 * Main page layout that includes the robot overview and team highlights.
 */
const Home: React.FC = () => {
	return (
		<Box alignContent={"center"} alignItems={"center"} bg='gray.950' maxW='100%' minH='100vh'>
			<Center h='100%' maxW={"full"}>
				<Container h={"100%"} maxW={"full"}>
					<Flex align={"center"} direction={"column"} h={"100%"} justify={"center"}>
						{/* Robot Overview Section */}
						<Box m={5}>
							<Group flexDirection={{base: "column", md: "row"}} spaceY={{base: 6, lg: 0}}>
								<Flex align='center' flex={1} justify='center' position='relative'>
									<Box maxW={{base: "450px", xl: "490px", lg: "460px"}} overflow='hidden' rounded='xl'>
										<ChakraImage asChild height={"auto"} objectFit={"cover"} w={"full"}>
											<Image alt={"willson"} loading='lazy' placeholder='blur' src={Willson}/>
										</ChakraImage>
									</Box>
								</Flex>
								<VStack align={{base: "center", md: "flex-start"}} flex={1} spaceY={"10"} textAlign={{base: "center", md: "left"}}>
									<Heading color='white' fontSize={{base: "3xl", sm: "4xl", lg: "6xl"}} fontWeight='bold' w='full'>
										Willson
									</Heading>
									<Text color='gray.400' fontSize='lg' w={{xl: "75%", lg: "80%"}}>
										Our robot for the FRC 2024 off-season, was put together from the outstanding
										ideas and hard work of all team members throughout the season. It competed in
										various competitions with great success.
									</Text>
								</VStack>
							</Group>
						</Box>
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
					</Flex>
				</Container>
			</Center>
		</Box>
	);
};

export default Home;
