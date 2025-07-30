"use client";

import { AnimatePresence, motion } from "motion/react";
import {useEffect, useMemo} from "react";
import Pagination from "@/components/Pagination";
import {ItemPaginationStore} from "@/stores/ItemPaginationStore";
import {observer} from 'mobx-react-lite';
import styled from "styled-components";
import {mQuery} from "@/styles/vars";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

interface CarouselProps {
	children: React.ReactNode[];
}

const CarouselContainer = styled.div`
	margin: 0.6rem;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 0.5rem;
	
	${mQuery.mobile} {
		display: none;
	}
	
	> ._card {
		transition-duration: 200ms;
	}
`;
const Carousel: React.FC<CarouselProps> = observer(({ children }) => {
	const itemPaginationStore = useMemo(() => new ItemPaginationStore(), []);
	const {setItems, currentPage, nextPage, prevPage} = itemPaginationStore;

	useEffect(() => {
		setItems(children);
	}, []);

	return (
		<CarouselContainer>
			<AnimatePresence mode='wait'>
				<motion.div
					key={currentPage}
					className="_card"
					animate={{ x: 0, opacity: 1 }}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					exit={{ x: -300, opacity: 0 }}
					initial={{ x: 300, opacity: 0 }}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							nextPage();
						} else if (swipe > swipeConfidenceThreshold) {
							prevPage();
						}
					}}>
					{children[currentPage]}
				</motion.div>
			</AnimatePresence>

			<Pagination store={itemPaginationStore} />
		</CarouselContainer>
	);
});

export default Carousel;
