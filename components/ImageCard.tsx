import NextImage, { StaticImageData } from "next/image";
import { Image as ChakraImage, VStack, Center, Heading, Text } from "@chakra-ui/react";
import { HTMLAttributes } from "react";

export interface ImageCardProps extends HTMLAttributes<HTMLDivElement> {
	image: StaticImageData;
	name: string;
	role: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, name, role }) => {
	return (
		<Center>
			<VStack>
				<ChakraImage asChild bg={"gray.900"} h={"250px"} objectFit={"contain"} ring={1} ringColor={"gray.800"} rounded={"lg"}>
					<NextImage alt={`${name}-${role}`} draggable={"false"} src={image} />
				</ChakraImage>
				<VStack spaceY={"-3"}>
					<Heading color={"white"} size={"lg"}>
						{name}
					</Heading>
					<Text color={"gray.500"}>{role}</Text>
				</VStack>
			</VStack>
		</Center>
	);
};

export default ImageCard;
