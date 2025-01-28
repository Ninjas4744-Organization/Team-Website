"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Button, Center, chakra, Container, Flex, HStack, IconButton, VStack, Text, Separator } from "@chakra-ui/react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaHeart, FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";
import { motion } from "motion/react";

import TBAIcon from "./TBAIcon";
import { PopoverArrow, PopoverBody, PopoverRoot, PopoverTrigger, PopoverContent, PopoverTitle } from "./ui/popover";

import NinjasLogo from "@/public/assets/NinjasLogo.svg";
import siteConfig from "@/config/siteConfig";

const NavbarItem = chakra(NextLink);
const NavbarLogo = chakra(Image);
const StyledHeart = chakra(FaHeart);

interface MenuToggleProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

const NavbarMenuToggle = ({ onClick, isMenuOpen }: MenuToggleProps) => {
  return (
    <Button hideFrom={"lg"} variant='outline' onClick={onClick}>
      {isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
    </Button>
  );
};

const AppNavbar: React.FC = () => {
  const [isMenuOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <Box>
      <Container alignItems={"center"} bg={"gray.900"} display={"flex"} h={"3.5rem"} justifyContent={"space-between"} maxW={"full"} paddingInline={4}>
        <HStack w='1/4'>
          <NavbarMenuToggle isMenuOpen={isMenuOpen} onClick={handleMenuToggle} />
          <NextLink href={"/"}>
            <NavbarLogo alt='NinjasLogo' h={10} src={NinjasLogo} w={10} />
          </NextLink>
        </HStack>

        <Flex flexGrow={1} hideBelow={"lg"} justifyContent={"center"} w={"1/2"}>
          <HStack spaceX={1.5}>
            {siteConfig.navLinks.map((item, index) => (
              <NavbarItem key={index} _hover={{ color: "blue.500" }} fontWeight={"medium"} href={item.href} transition={"all"}>
                {item.title}
              </NavbarItem>
            ))}
          </HStack>
        </Flex>

        <HStack hideBelow={"lg"} justify='end' spaceX={2} w='1/4'>
          <HStack spaceX={-1}>
            <NextLink href={siteConfig.siteLinks.github}>
              <IconButton aria-label={"GitHub"} size={"md"} variant={"ghost"}>
                <FaGithub />
              </IconButton>
            </NextLink>
            <NextLink href={siteConfig.siteLinks.instagram}>
              <IconButton aria-label={"Instagram"} size={"md"} variant={"ghost"}>
                <FaInstagram />
              </IconButton>
            </NextLink>
            <NextLink href={siteConfig.siteLinks.facebook}>
              <IconButton aria-label={"Facebook"} size={"md"} variant={"ghost"}>
                <FaFacebookF />
              </IconButton>
            </NextLink>
            <NextLink href={siteConfig.siteLinks.tba}>
              <IconButton aria-label={"TBA"} size={"md"} variant={"ghost"}>
                <TBAIcon />
              </IconButton>
            </NextLink>
          </HStack>
          <PopoverRoot>
            <PopoverTrigger asChild>
              <Button borderRadius={10} p={3} variant={"surface"}>
                <StyledHeart color={"red.600"} />
                Sponsor
              </Button>
            </PopoverTrigger>
            <PopoverContent p={5}>
              <PopoverArrow />
              <PopoverBody>
                <PopoverTitle fontSize={"lg"} fontWeight='bold' mb={5}>
                  Sponsor us!
                </PopoverTitle>
                <Separator />
                <Text my='4'>Thanks for wanting to support us! Email: ninjas4744@gmail.com</Text>
              </PopoverBody>
            </PopoverContent>
          </PopoverRoot>
        </HStack>
      </Container>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} style={{ zIndex: 9999, position: "relative" }}>
          <Center bg={"gray.900"} borderRadius='lg' boxShadow='lg' hideFrom={"lg"} left='50%' maxW='800px' p={4} position='absolute' ring={1} ringColor={"gray.700"} top='2rem' transform='translateX(-50%)' w='90%'>
            <VStack divideY={"2px"} spaceY={2} w='full'>
              <HStack justifyContent='space-between' w='full'>
                <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                  Navigation
                </Text>
                <Button aria-label='Close menu' color='gray.400' size='sm' variant='ghost' onClick={handleMenuToggle}>
                  <IoMdClose />
                </Button>
              </HStack>
              {siteConfig.navLinks.map((item, index) => (
                <NavbarItem key={index} _hover={{ color: "blue.500" }} href={item.href} pt={2} transition={"all"} w={"full"} onClick={() => setMenuIsOpen(false)}>
                  {item.title}
                </NavbarItem>
              ))}
            </VStack>
          </Center>
        </motion.div>
      )}
    </Box>
  );
};

export default AppNavbar;
