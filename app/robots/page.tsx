import Robots from "@/components/robots/Robots";
import type {RobotItem} from "@/lib/types/Robot";

export default async function RobotsListPage() {
	const robots = await import('@/data/robots.json');
	const keys = Object.keys(robots.default).sort().reverse() as (keyof typeof robots.default)[];

	const robotsList: RobotItem[] = [];
	for (const id of keys) {
		robotsList.push({
			...robots.default[id],
			id
		});
	}

	return <Robots robots={robotsList} />;
};
