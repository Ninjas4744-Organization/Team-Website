/**
 * Page Component
 *
 * This component represents the main page for the Ninjas #4744 team. It displays
 * a hero section with the team’s picture and titles, followed by sections for Mentors
 * and Team Leads.
 *
 * Styled using Chakra UI, the component is responsive and leverages its design system
 * for consistent styling and spacing.
 *
 * Written by @DeveloperCron and ChatGPT
 */

"use client";

import { Box, Center, Container, Flex, Heading, Image as ChakraImage, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

// Images

import teamPicture from "@/public/assets/teamPicture.webp";
// Leads
import liorPicture from "@/public/assets/people/LiorPicture.png";
import tzufPicture from "@/public/assets/people/TzufPicture.png";
import eitanPicture from "@/public/assets/people/EitanPicture.png";
import idoPicture from "@/public/assets/people/IdoPicture.png";
import ronPicture from "@/public/assets/people/RonPicture.png";
// Mentors
import etaiPicture from "@/public/assets/people/EtaiPicture.png";
import kfirPicture from "@/public/assets/people/KfirPicture.png";
import pachaPicture from "@/public/assets/people/PachaPicture.png";
import shaiPicture from "@/public/assets/people/ShaiPicture.png";
import talPicture from "@/public/assets/people/TalPicture.png";
import ImageCard from "@/components/ImageCard";

const Page = () => {
  // Define team leads and mentors data
  const teamLeads = [
    { name: "Lior", role: "C&M", image: liorPicture },
    { name: "Tzuf", role: "Captain", image: tzufPicture },
    { name: "Eitan", role: "Software", image: eitanPicture },
    { name: "Ido", role: "Mechanics", image: idoPicture },
    { name: "Ron", role: "Control", image: ronPicture },
  ];

  const mentors = [
    { name: "Shai", role: "Mechanics mentor", image: shaiPicture },
    { name: "Pacha", role: "CAD mentor", image: pachaPicture },
    { name: "Kfir", role: "Control mentor", image: kfirPicture },
    { name: "Etai", role: "Lead mentor", image: etaiPicture },
    { name: "Tal", role: "Software mentor", image: talPicture },
  ];

  return (
    <Container scaleY={8} w='full'>
      {/* Hero Section */}
      <Box h='350px' overflow='hidden' position='relative' w='full'>
        <ChakraImage asChild h='100%' loading='lazy' objectFit='cover' position='absolute' w='100%'>
          <Image alt='TeamPicture' src={teamPicture} />
        </ChakraImage>
        <Flex align='center' bg='rgba(0, 0, 0, 0.5)' color='white' flexDirection='column' h='full' justify='center' position='absolute' textAlign='center' w='full'>
          <Heading color={"blue.500"} fontWeight='bold' size='5xl'>
            Ninjas #4744
          </Heading>
          <Text fontSize='xl'>Team</Text>
        </Flex>
      </Box>

      {/* Mentors Section */}
      <VStack mb={"5"} mt={"5"} px={2} w='full'>
        <VStack spaceY={"-2"}>
          <Heading size='3xl' textAlign='left'>
            Mentors
          </Heading>
          <Text color={"gray.400"}>Meet our mentors</Text>
        </VStack>
        <Center flexDirection={{ base: "column", lgTo2xl: "row" }} spaceX={{ base: "unset", lgTo2xl: "5" }} spaceY={{ base: "3", lgTo2xl: "unset" }}>
          {mentors.map((mentor, index) => (
            <ImageCard key={index} image={mentor.image} name={mentor.name} role={mentor.role} />
          ))}
        </Center>
      </VStack>

      {/* Team Leads Section */}
      <VStack px={2} w='full'>
        <VStack spaceY={"-2"}>
          <Heading size='3xl' textAlign='left'>
            Team leads
          </Heading>
          <Text color={"gray.400"}>Meet our mentors</Text>
        </VStack>
        <Center flexDirection={{ base: "column", lgTo2xl: "row" }} spaceX={{ base: "unset", lgTo2xl: "5" }} spaceY={{ base: "3", lgTo2xl: "unset" }}>
          {teamLeads.map((lead, index) => (
            <ImageCard key={index} image={lead.image} name={lead.name} role={lead.role} />
          ))}
        </Center>
      </VStack>
    </Container>
  );
};

export default Page;
