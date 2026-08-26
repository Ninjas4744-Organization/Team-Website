"use client";

import { AnimatePresence, motion } from "motion/react";
import { Children, isValidElement, useEffect, useMemo } from "react";
import Pagination from "@/components/Pagination";
import { ItemPaginationStore } from "@/stores/ItemPaginationStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { mQuery } from "@/styles/vars";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

interface CarouselProps {
	children: React.ReactNode;
}

const CarouselContainer = styled.div`
	margin: 0.75rem 0;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 0.5rem;

	${mQuery.mobile} {
		display: none;
	}

	> ._card {
		cursor: grab;

		&:active {
			cursor: grabbing;
		}
	}
`;

function getSlideSignature(children: React.ReactNode): string {
	return Children.toArray(children)
		.map((child, index) => (isValidElement(child) ? child.key ?? index : index))
		.join("|");
}

const Carousel: React.FC<CarouselProps> = observer(({ children }) => {
	const itemPaginationStore = useMemo(
		() => new ItemPaginationStore<React.ReactNode>(),
		[],
	);
	const slideSignature = getSlideSignature(children);
	const childItems = Children.toArray(children);
	const { currentPage, nextPage, prevPage } = itemPaginationStore;

	useEffect(() => {
		itemPaginationStore.setItems(childItems);
	}, [itemPaginationStore, slideSignature]);

	return (
		<CarouselContainer>
			<AnimatePresence mode="wait">
				<motion.div
					key={currentPage}
					className="_card"
					animate={{ x: 0, opacity: 1 }}
					drag="x"
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
					}}
				>
					{childItems[currentPage]}
				</motion.div>
			</AnimatePresence>

			<Pagination store={itemPaginationStore} />
		</CarouselContainer>
	);
});

export default Carousel;
