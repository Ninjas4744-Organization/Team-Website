import { Center, chakra, Box, VStack, HStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from "@/components/ui/pagination";

const AnimatedDiv = chakra(motion.div);

// Constants for swipe gesture handling
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

// Carousel Props
interface CarouselProps {
  /** Array of React nodes to be displayed in the carousel */
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  // State for tracking the current active index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  /**
   * Handles pagination in the specified direction.
   * @param direction - Positive for next slide, negative for previous slide.
   */
  const paginate = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;

      // Handle wrap-around logic
      if (newIndex < 0) return children.length - 1; // Go to the last item
      if (newIndex >= children.length) return 0; // Wrap back to the first item

      return newIndex;
    });
  };

  return (
    <Box hideBelow={"lg"} m={2}>
      <Center>
        <VStack>
          {/* Animated Carousel Content */}
          <AnimatePresence mode='wait'>
            <AnimatedDiv
              key={currentIndex}
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
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}>
              {children[currentIndex]}
            </AnimatedDiv>
          </AnimatePresence>

          {/* Pagination Controls */}
          <PaginationRoot
            count={children.length} // Dynamically update count based on children
            defaultPage={1}
            pageSize={1} // Set to 1 to display items individually
            size='md'
            onPageChange={(e) => {
              // Update pagination directly
              const newIndex = e.page - 1; // Pages are 1-indexed; array indices are 0-indexed

              setCurrentIndex(newIndex);
            }}>
            <HStack>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        </VStack>
      </Center>
    </Box>
  );
};

export default Carousel;
