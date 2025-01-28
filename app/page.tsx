"use client";

import { Container, Flex, Box, Heading, Text, Image as ChakraImage, Center, VStack, Group } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoPersonOutline, IoBuildOutline, IoTrophyOutline } from "react-icons/io5";

import Willson from "@/public/assets/robots/Willson.webp";
import Carousel from "@/components/Carousel/Index";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Sponsors from "@/constants/Sponsors";
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion";
// Type definition for the properties of each highlight card
type HighlightCardProps = {
  title: string;
  description: string;
};

// Type definition for the properties of the icon box below each card
type IconBoxProps = {
  title: string; // Title to display under the icon
  children: React.ReactNode; // Icon element to render
};

// Type definition for the structure of the highlights data
type HighlightItem = HighlightCardProps & {
  icon: React.ReactNode; // Icon associated with the highlight
};

/**
 * TeamHighlights Component
 * Displays a collection of cards with team-related highlights (e.g., members, achievements).
 */
const TeamHighlights: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      title: "Members",
      description: "As of 2025, we have 25 members from middle school to senior year. These students are tasked with a variety of challenges that help them in the future, from raising budgets for our team to programming the robot from scratch.",
      icon: <IoPersonOutline size={30} />,
    },
    {
      title: "Competitions",
      description: "Throughout our journey, we have won multiple competitions such as the off-season 2022. Our most significant win was in 2016 when we won first place at the competition held by FRC in Israel, allowing us to compete against teams around the world at the international competition.",
      icon: <IoTrophyOutline size={30} />,
    },
    {
      title: "Establishment",
      description: "Ninjas #4744 was established in 2013 at the Amal sciences and arts school. We started as a small team and throughout the years we grew, now consisting of 20 young students from middle to high school.",
      icon: <IoBuildOutline size={30} />,
    },
  ];

  return (
    <Box bg={"gray.900"} display={"flex"} justifyContent={"center"} m={10} p={2} py={10} w={"100%"}>
      <Container width={"100%"}>
        {/* Header Section */}
        <VStack mb={8} mt={10} spaceY={2}>
          <Heading as='h1' color='blue.500' fontSize='5xl' fontWeight='bold'>
            Ninjas #4744
          </Heading>
          <Text color='gray.500' fontSize='lg' textAlign={"center"}>
            We&apos;re the robotics team of Amal Hadera school since 2013.
          </Text>
        </VStack>

        {/* Highlights Section */}
        <Flex align='center' direction={{ base: "column", md: "row" }} gap={6} justify='center'>
          {highlights.map((highlight, index) => (
            <Center key={index} flexDirection='column'>
              <VStack spaceY={5}>
                {/* Card for each highlight */}
                <HighlightCard description={highlight.description} title={highlight.title} />
                {/* Icon box below each card */}
                <IconBox title={highlight.title}>{highlight.icon}</IconBox>
              </VStack>
            </Center>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

/**
 * IconBox Component
 * Displays a circular icon with a title below it.
 */
const IconBox: React.FC<IconBoxProps> = ({ title, children }) => {
  return (
    <VStack align='center'>
      <Center borderRadius='full' h={20} ring='2px' ringColor='blue.500' w={20}>
        {children}
      </Center>
      <Text color='gray.400' fontSize='sm'>
        {title}
      </Text>
    </VStack>
  );
};

/**
 * HighlightCard Component
 * Represents a card with a title and description.
 */
const HighlightCard: React.FC<HighlightCardProps> = ({ title, description }) => {
  return (
    <Box bg='gray.900' borderRadius='lg' boxShadow='lg' display='flex' flexDirection='column' maxW='sm' minH='200px' p={4} ring='1px' ringColor='gray.800' textAlign='center'>
      <Heading color='white' fontSize='lg' mb={2}>
        {title}
      </Heading>
      <Text color='gray.400' fontSize='sm'>
        {description}
      </Text>
    </Box>
  );
};

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
              <Group flexDirection={{ base: "column", md: "row" }} spaceY={{ base: 6, lg: 0 }}>
                <Flex align='center' flex={1} justify='center' position='relative'>
                  <Box maxW={{ base: "450px", xl: "490px", lg: "460px" }} overflow='hidden' rounded='xl'>
                    <ChakraImage asChild height={"auto"} objectFit={"cover"} w={"full"}>
                      <Image alt={"willson"} loading='lazy' placeholder='blur' src={Willson} />
                    </ChakraImage>
                  </Box>
                </Flex>
                <VStack align={{ base: "center", md: "flex-start" }} flex={1} spaceY={"10"} textAlign={{ base: "center", md: "left" }}>
                  <Heading color='white' fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} fontWeight='bold' w='full'>
                    Willson
                  </Heading>
                  <Text color='gray.400' fontSize='lg' w={{ xl: "75%", lg: "80%" }}>
                    Our robot for the FRC 2024 off-season, was put together from the outstanding ideas and hard work of all team members throughout the season. It competed in various competitions with great success.
                  </Text>
                </VStack>
              </Group>
            </Box>

            {/* Team Highlights Section */}
            <TeamHighlights />
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
                      <CarouselCard key={index} cardDescription={item.description} cardImage={item.logo} cardTitle={item.title} />
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
                                <Image alt={`${item.title}`} src={item.logo} />
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
