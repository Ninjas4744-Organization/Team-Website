import React from "react";
import { Box, Center, Image as ChakraImage, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CarouselCardProperties {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
}

const CarouselCard: React.FC<CarouselCardProperties> = ({ cardTitle, cardDescription, cardImage }) => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Center bg={"gray.800"} display={"flex"} height={{ base: "auto", lg: "300px" }} ring={"1px"} ringColor={"gray.600"} rounded={"lg"} w={"10/12"}>
        <HStack justifyContent='space-evenly' p={2} spaceX={4} spaceY={5}>
          <ChakraImage asChild height={"auto"} objectFit={"cover"} w={"60%"}>
            <Image alt={`${cardTitle}-${cardDescription}`} src={cardImage} />
          </ChakraImage>
          <Center>
            <VStack>
              <Heading color={"white"} fontSize={"4xl"} fontWeight={"bold"} mb={2} textAlign={"start"} w={"full"}>
                {cardTitle}
              </Heading>
              <Text fontSize={"md"} mt={10} textAlign={"start"}>
                {cardDescription}
              </Text>
            </VStack>
          </Center>
        </HStack>
      </Center>
    </Box>
  );
};

export default CarouselCard;
