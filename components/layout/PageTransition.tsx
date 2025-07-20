"use client";

import {usePathname} from "next/navigation";
import AnimatedDiv from "@/components/ui/AnimatedDiv";

export default function PageTransition({children}: { children: React.ReactNode }) {
	const pathname = usePathname();

	return <AnimatedDiv
		key={pathname}
		initial={{opacity: 0, y: 12}}
		animate={{opacity: 1, y: 0}}
		exit={{opacity: 0, y: -8}}
		transition={{duration: 0.3, ease: "easeInOut"}}>
		{children}
	</AnimatedDiv>;
}
