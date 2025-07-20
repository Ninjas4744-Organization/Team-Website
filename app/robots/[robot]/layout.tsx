import {Tabs} from "@/components/ui/Tabs";
import {Metadata} from "next";
import robots from "@/data/robots.json";
import type {Robot} from "@/lib/types/Robot";

type RobotPageProps = {
	id: keyof typeof robots;
}

export async function generateMetadata({ params }: { params: Promise<RobotPageProps> }): Promise<Metadata> {
	const {id} = await params;
	const robot: Robot = robots[id];

	return {
		title: `${robot.label} | Ninjas #4744`,
		description: `Details about robot ${robot.name} by Ninjas #4744.`,
	};
}

type LayoutProps = {
	children: React.ReactNode;
}

export default async function({children}: LayoutProps) {
	return (
		<>
			<Tabs baseRoute="/robots" data={robots} />
			{children}
		</>
	);
}
