import type { Robot } from "@/lib/types/Robot";
import { RobotPageContainer, type RobotNavItem } from "@/components/robots/RobotPageContainer";

interface RobotPageProps {
	params: Promise<{
		id: string;
	}>;
}

type Robots = {
	[key: string]: Robot;
};

export default async function RobotPage({ params }: RobotPageProps) {
	const { id: robotId } = await params;

	const robots: Robots = (await import("@/data/robots.json")).default;
	const robot: Robot = robots[robotId];

	if (!robot) {
		return <p>Robot not found</p>;
	}

	const robotIds = Object.keys(robots).sort().reverse();
	const currentIndex = robotIds.indexOf(robotId);

	const toNavItem = (id: string): RobotNavItem => ({
		id,
		name: robots[id].name,
	});

	return (
		<RobotPageContainer
			robot={robot}
			newerRobot={currentIndex > 0 ? toNavItem(robotIds[currentIndex - 1]) : undefined}
			olderRobot={
				currentIndex < robotIds.length - 1
					? toNavItem(robotIds[currentIndex + 1])
					: undefined
			}
		/>
	);
}
