"use client";

import { Center, chakra, Box, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import {useEffect, useMemo} from "react";
import Pagination from "@/components/Pagination";
import {ItemPaginationStore} from "@/stores/ItemPaginationStore";
import {observer} from 'mobx-react-lite';

const AnimatedDiv = chakra(motion.div);

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

interface CarouselProps {
	children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = observer(({ children }) => {
	const itemPaginationStore = useMemo(() => new ItemPaginationStore(), []);
	const {setItems, currentPage, nextPage, prevPage} = itemPaginationStore;

	useEffect(() => {
		setItems(children);
	}, []);

	return (
		<Box hideBelow={"lg"} m={2}>
			<Center>
				<VStack>
					<AnimatePresence mode='wait'>
						<AnimatedDiv
							key={currentPage}
							animate={{ x: 0, opacity: 1 }}
							drag='x'
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
							exit={{ x: -300, opacity: 0 }}
							initial={{ x: 300, opacity: 0 }}
							transitionDuration={"moderate"}
							onDragEnd={(e, { offset, velocity }) => {
								const swipe = swipePower(offset.x, velocity.x);

								if (swipe < -swipeConfidenceThreshold) {
									nextPage();
								} else if (swipe > swipeConfidenceThreshold) {
									prevPage();
								}
							}}>
							{children[currentPage]}
						</AnimatedDiv>
					</AnimatePresence>

					<Pagination store={itemPaginationStore} />
				</VStack>
			</Center>
		</Box>
	);
});

export default Carousel;
