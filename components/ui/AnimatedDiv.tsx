"use client";

import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";
import type { HTMLMotionProps } from "motion/react";

export type AnimatedDivProps = PropsWithChildren<HTMLMotionProps<"div">>;

const AnimatedDiv = dynamic(
	() =>
		import("motion/react").then(({ motion }) => {
			return function AnimatedDiv(props: AnimatedDivProps) {
				return <motion.div {...props} />;
			};
		}),
	{ ssr: false },
);

export default AnimatedDiv;
