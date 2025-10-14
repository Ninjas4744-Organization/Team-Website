import Image from "next/image";
import type {Robot} from "@/lib/types/Robot";
import { RobotPageContainer } from "@/components/robots/RobotPageContainer";
import classNames from 'classnames';

interface RobotPageProps {
	params: Promise<{
		id: string;
	}>;
}

type Robots = {
	[key: string]: Robot;
};

export default async function RobotPage({ params }: RobotPageProps) {
	const _params = await params;
	const robotId = _params.id;

	const robots: Robots = (await import('@/data/robots.json')).default;
	const robot: Robot = robots[robotId];

	if (!robot) {
		return <p>Robot not found</p>;
	}

    const h1Class: string = classNames({"_name_regular": robot.name != "P.E.K.K.A"}, {"_name_pekka": robot.name == "P.E.K.K.A"});

	return (
		<RobotPageContainer>
			<div>
				<div className="_robot_image_container">
					<Image
						src={`/assets/robots/${robot.name}.webp`}
						alt={`Robot ${robot.name}`}
						width={800}
						height={600}
						className="_robot_image" />
				</div>
				<h1 className={h1Class}>{robot.name}</h1>
				<p><strong>Year:</strong> {robot.year}</p>
			</div>
			<div className="_description_container">
				<p>{robot.description}</p>
			</div>

		</RobotPageContainer>
	);
}
