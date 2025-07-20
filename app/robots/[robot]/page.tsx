import Image from "next/image";
import type {Robot} from "@/lib/types/Robot";

interface RobotPageProps {
	params: {
		robot: string;
	};
}

type Robots = {
	[key: string]: Robot;
};

export default async function RobotPage({ params }: RobotPageProps) {
	const robotId = params.robot;

	const robots: Robots = (await import('@/data/robots.json')).default;
	const robot: Robot = robots[robotId];

	if (!robot) {
		return <p>Robot not found</p>;
	}

	return (
		<main>
			<h1>{robot.name}</h1>
			<p><strong>Year:</strong> {robot.year}</p>
			<p><strong>Description:</strong> {robot.description}</p>

			<Image
				src={`/assets/robots/${robot.name}.webp`}
				alt={`Robot ${robot.name}`}
				width={800}
				height={600}
			/>
		</main>
	);
}
