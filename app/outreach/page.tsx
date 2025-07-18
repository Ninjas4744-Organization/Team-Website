"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const Page: React.FC = () => {
	return (
		<Box px={6} py={10} textAlign='center'>
			<Box display='inline-block'>
				<Flex alignItems='center' bg={"red.500"} flexDirection='column' h={"55px"} justifyContent='center' rounded={"50px"} textAlign='center' w={"55px"}>
					<IoClose color={"white"} height={"50px"} size={"40"} width={"50px"} />
				</Flex>
			</Box>
			<Heading as='h2' mb={2} mt={6} size='xl'>
				Not implemented
			</Heading>
			<Text color={"gray.500"}>This page is under heavy construction</Text>
		</Box>
	);
};

export default Page;
