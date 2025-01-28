"use client";

import { Box, Container, chakra, Stack, VStack, HStack, Text, IconButton, Flex } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";

import TBAIcon from "./TBAIcon";

import NinjasLogo from "@/public/assets/NinjasLogo.svg";
import siteConfig from "@/config/siteConfig";

const StyledImage = chakra(Image);
const StyledLink = chakra(NextLink);

const Logo: React.FC = () => {
  return <StyledImage alt='Ninjas Logo' h={10} src={NinjasLogo} w={10} />;
};

/**
 * AppFooter Component
 * This component serves as the footer for the application, providing a map view and copyright information.
 *
 * Features:
 * - Includes a copyright notice.
 */
const AppFooter: React.FC = () => {
  return (
    <Box position='sticky' zIndex={1}>
      <Container centerContent as={Stack} bg='gray.900' divideY={"1px"} maxW='full' p={2}>
        <VStack maxW={"full"}>
          <Logo />
          <HStack spaceX={2}>
            {siteConfig.navLinks.map((item, index) => (
              <StyledLink key={index} _hover={{ color: "blue.600" }} href={item.href} paddingTop={2} transition={"all"} w={"full"}>
                {item.title}
              </StyledLink>
            ))}
          </HStack>
        </VStack>
        <Box>
          <Flex align='center' direction={{ base: "column", lgTo2xl: "row" }} justify='center' maxW='full' p={2}>
            <Text color='gray.400' fontSize='sm' mb={2} mr={2} mt={2} textAlign='center' w='full'>
              All rights reserved © Ninjas#4744 since 2013
            </Text>
            <HStack>
              <NextLink href={siteConfig.siteLinks.github}>
                <IconButton aria-label='GitHub' size='md' variant='ghost'>
                  <FaGithub />
                </IconButton>
              </NextLink>
              <NextLink href={siteConfig.siteLinks.instagram}>
                <IconButton aria-label='Instagram' size='md' variant='ghost'>
                  <FaInstagram />
                </IconButton>
              </NextLink>
              <NextLink href={siteConfig.siteLinks.facebook}>
                <IconButton aria-label='Facebook' size='md' variant='ghost'>
                  <FaFacebookF />
                </IconButton>
              </NextLink>
              <NextLink href={siteConfig.siteLinks.tba}>
                <IconButton aria-label={"TBA"} size={"md"} variant={"ghost"}>
                  <TBAIcon />
                </IconButton>
              </NextLink>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;
