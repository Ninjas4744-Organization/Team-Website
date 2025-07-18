import { Container, HStack, Tabs, Text, VStack, Heading, Image as ChakraImage, Flex, Box, Separator, Center } from "@chakra-ui/react";
import Image from "next/image";

import { Robots, RobotsTabs } from "@/constants/Robots";
const Page: React.FC = () => {
	return (
		<Box bg='gray.950' display={"flex"} justifyContent={"center"} maxW='100%' minH='100vh'>
			<Container p={2} w={"full"}>
				<Center mt={15}>
					<VStack mb={5} spaceY={"-1.5"}>
						<Heading size={"4xl"}>Our Robots</Heading>
						<Text color={"gray.500"}>Our robots since 2013</Text>
					</VStack>
				</Center>
				<Tabs.Root fitted bg={"gray.900"} defaultValue={"Willson"} maxW='full' rounded={"lg"} variant='enclosed'>
					{/* Add a wrapper to make Tabs.List horizontally scrollable on mobile */}
					<HStack
						css={{
							"&::-webkit-scrollbar": {
								display: "none",
							},
						}}
						overflowX={{ base: "auto", md: "visible" }}
						spaceX={3}>
						{RobotsTabs.map((item, index) => (
							<Tabs.Trigger key={index} value={item.robotName}>
								<HStack>
									<Text display={"inline"} whiteSpace='nowrap'>
										{item.robotYear}
									</Text>
								</HStack>
							</Tabs.Trigger>
						))}
					</HStack>
					<Separator />
					{Robots.map((item, index) => (
						<Tabs.Content key={index} p={2} value={item.robotName}>
							<Flex direction={{ base: "column", lg: "row" }} justify={"space-around"} spaceX={{ base: "0", lg: "3" }}>
								<ChakraImage asChild h={{ base: "1/2", lg: "7/12" }} rounded={"xl"} w={{ base: "full", lg: "5/12" }}>
									<Image alt={item.robotName} loading='lazy' src={item.robotImage} />
								</ChakraImage>
								<VStack divideY={"1px"} p={2} w={"8/12"}>
									<VStack spaceY={"-1.5"} w={"full"}>
										<Heading as={"h1"} size={"3xl"} textAlign={"start"} w={"full"}>
											{item.robotName}
										</Heading>
										<Text color={"gray.400"} fontSize={"sm"} textAlign={"start"} w='full'>
											{item.robotYear}
										</Text>
									</VStack>
									<Text color={"gray.400"} py={"2"}>
										{item.robotDescription}
									</Text>
								</VStack>
							</Flex>
						</Tabs.Content>
					))}
				</Tabs.Root>
			</Container>
		</Box>
	);
};

export default Page;
