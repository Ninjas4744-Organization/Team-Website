import { RobotPageContainer, type RobotNavItem } from "@/components/robots/RobotPageContainer";
import { notFound } from 'next/navigation';
import { robotEntries, robotIds } from '@/lib/robots';

interface RobotPageProps {
	params: Promise<{
		id: string;
	}>;
}

export function generateStaticParams() {
	return robotIds.map((id) => ({ id }));
}

export default async function RobotPage({ params }: RobotPageProps) {
	const { id: robotId } = await params;
	const entry = robotEntries[robotId];
	if (!entry) notFound();

	const { robot, Content } = entry;
	const currentIndex = robotIds.indexOf(robotId);

	const toNavItem = (id: string): RobotNavItem => ({
		id,
		name: robotEntries[id].robot.name,
	});

	return (
		<RobotPageContainer
			robot={robot}
			content={<Content />}
			newerRobot={currentIndex > 0 ? toNavItem(robotIds[currentIndex - 1]) : undefined}
			olderRobot={
				currentIndex < robotIds.length - 1
					? toNavItem(robotIds[currentIndex + 1])
					: undefined
			}
		/>
	);
}
