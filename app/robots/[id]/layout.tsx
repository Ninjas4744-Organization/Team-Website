import {Tabs} from "@/components/ui/Tabs";
import {Metadata} from "next";
import { notFound } from 'next/navigation';
import { getRobotTabs, robotEntries } from '@/lib/robots';

type RobotPageProps = {
	id: string;
}

export async function generateMetadata({ params }: { params: Promise<RobotPageProps> }): Promise<Metadata> {
	const {id} = await params;
	const robot = robotEntries[id]?.robot;
	if (!robot) notFound();

	return {
		title: `${robot.label} | Ninjas #4744`,
		description: `Details about robot ${robot.name} by Ninjas #4744.`,
	};
}

type LayoutProps = {
	children: React.ReactNode;
}

export default async function RobotLayout({children}: LayoutProps) {
	return (
		<>
			<Tabs baseRoute="/robots" data={getRobotTabs()} />
			{children}
		</>
	);
}
