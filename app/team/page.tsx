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

import { Box, Container, Flex, Heading, Image as ChakraImage, Text, VStack } from "@chakra-ui/react";
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
    { name: "Kfir", role: "Software mentor", image: kfirPicture },
    { name: "Etai", role: "Lead mentor", image: etaiPicture },
    { name: "Tal", role: "Control mentor", image: talPicture },
  ];

  return (
    <Container maxW='full' mb={5} p={0}>
      {/* Hero Section */}
      <Box h='350px' overflow='hidden' position='relative' w='full'>
        <ChakraImage asChild h='100%' loading='lazy' objectFit='cover' position='absolute' w='100%'>
          <Image alt='TeamPicture' src={teamPicture} />
        </ChakraImage>
        <Flex align='center' bg='rgba(0, 0, 0, 0.5)' color='white' direction='column' h='full' justify='center' position='absolute' textAlign='center' w='full'>
          <Heading color='blue.500' fontSize={{ base: "4xl", md: "5xl" }} fontWeight='bold'>
            Ninjas #4744
          </Heading>
          <Text fontSize='xl' mt={2}>
            Team
          </Text>
        </Flex>
      </Box>

      {/* Team Leads Section */}
      <VStack px={2} w='full'>
        {/* Centered Heading and Text */}
        <VStack align='center' spaceY={-2} w='full'>
          <Heading size='2xl' textAlign='center' w='full'>
            Mentors
          </Heading>
          <Text color='gray.400' textAlign='center' w='full'>
            Meet our mentors
          </Text>
        </VStack>

        {/* Team Leads Cards */}
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 3, lg: 5 }} justify='center' mt={5} w='full'>
          {mentors.map((item, index) => (
            <ImageCard key={index} image={item.image} name={item.name} role={item.role} />
          ))}
        </Flex>
      </VStack>

      {/* Team Leads Section */}
      <VStack mt={10} px={2} w='full'>
        {/* Centered Heading and Text */}
        <VStack align='center' spaceY={-2} w='full'>
          <Heading size='2xl' textAlign='center' w='full'>
            Team Leads
          </Heading>
          <Text color='gray.400' textAlign='center' w='full'>
            Meet our team leads
          </Text>
        </VStack>

        {/* Team Leads Cards */}
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 3, lg: 5 }} justify='center' mt={5} w='full'>
          {teamLeads.map((item, index) => (
            <ImageCard key={index} image={item.image} name={item.name} role={item.role} />
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Page;
