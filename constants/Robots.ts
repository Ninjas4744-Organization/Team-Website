import { StaticImageData } from "next/image";

// Images
import Aeleos from "@/public/assets/robots/Aeleos.webp";
import Alpha from "@/public/assets/robots/Alpha.webp";
import Bolt from "@/public/assets/robots/Bolt.webp";
import Hugo from "@/public/assets/robots/Hugo.webp";
import Mamba from "@/public/assets/robots/Mamba.webp";
import Moses from "@/public/assets/robots/Moses.webp";
import Optimus from "@/public/assets/robots/Optimus.webp";
import Pegasus from "@/public/assets/robots/Pegasus.webp";
import Rocky from "@/public/assets/robots/Rocky.webp";
import Toothless from "@/public/assets/robots/Toothless.webp";
import Venus from "@/public/assets/robots/Venus.webp";
import Willson from "@/public/assets/robots/Willson.webp";

export type RobotTabCard = {
	robotName: string;
	robotYear: string;
	robotDescription: string;
	robotImage: StaticImageData;
};

export type RobotTab = {
	robotYear: string;
	robotName: string;
};

const Robots: RobotTabCard[] = [
	{
		robotYear: "2013",
		robotName: "Rocky",
		robotDescription: "Cartridge frisbee storage system, Shooter frisbee firing system with horizontal wheel Climber piston powered climber",
		robotImage: Rocky,
	},
	{
		robotYear: "2014",
		robotName: "Alpha",
		robotDescription: "Collecting System: Two sturdy sticks connected by a durable strap, ensuring efficient and reliable operation. Shooting System: Powered by precision-engineered pistons for high accuracy and performance.",
		robotImage: Alpha,
	},
	{
		robotYear: "2015",
		robotName: "Moses",
		robotDescription: "Collecting System: A wheeled arm designed to efficiently gather crates with precision and ease. Lifting System: A telescopic arm, enabling smooth and reliable elevation for optimal operation",
		robotImage: Moses,
	},
	{
		robotYear: "2016",
		robotName: "Hugo",
		robotDescription: "Shooting System: A powerful catapult mechanism designed to launch objects over obstacles with precision into the opposing alliance's tower. Defense Shield: A robust shield strategically deployed to protect the team’s tower from incoming challenges.",
		robotImage: Hugo,
	},
	{
		robotYear: "2017",
		robotName: "Optimus",
		robotDescription: "Climbing System: A high-performance robot capable of scaling a 1.5-meter rope in just 3-4 seconds. Shooting System: Fires up to 4 balls per second with an impressive 80% accuracy rate, ensuring efficient scoring. Gear Collecting System: Seamlessly collects gears from the charging station and directly transfers them into the lift for smooth operation.",
		robotImage: Optimus,
	},
	{
		robotYear: "2018",
		robotName: "Aeleos",
		robotDescription: "Collection System: A telescopic arm equipped with a compliant wheel intake, specifically designed for efficient and reliable collection of yellow cubes. Chassis: A tank drive chassis,",
		robotImage: Aeleos,
	},
	{
		robotYear: "2019",
		robotName: "Venus",
		robotDescription: "Hatch Trapper: A pneumatic-powered hatch trapper. Indexer: An elevator mechanism used as an indexer",
		robotImage: Venus,
	},
	{
		robotYear: "2020",
		robotName: "Mamba",
		robotDescription: "The robot features a bumper-mounted intake feeding into a rotating indexer drum, paired with a servo-driven turret shooter for rapid field deployment.",
		robotImage: Mamba,
	},
	{
		robotYear: "2022",
		robotName: "Pegasus",
		robotDescription: "A multi-stage telescoping arm with encoded linkage provides vertical mobility, coupled with a roller-driven floor intake system.",

		robotImage: Pegasus,
	},
	{
		robotYear: "2023",
		robotName: "Bolt",
		robotDescription: "Bolt combines swerve drive mobility with a retractable telescoping arm for cone placement, enhanced by a powered roller intake system.",
		robotImage: Bolt,
	},
	{
		robotYear: "2024",
		robotName: "Toothless",
		robotDescription: "Continues elevator for climbing, for intake and outtake we had continues elevator with bottom and top rollers.",
		robotImage: Toothless,
	},
	{
		robotYear: "2024 - iOS",
		robotName: "Willson",
		robotDescription: "Under the bumper intake, indexer and a shooter ",
		robotImage: Willson,
	},
];
const RobotsTabs: RobotTab[] = [
	{
		robotYear: "2013",
		robotName: "Rocky",
	},
	{
		robotYear: "2014",
		robotName: "Alpha",
	},
	{
		robotYear: "2015",
		robotName: "Moses",
	},
	{
		robotYear: "2016",
		robotName: "Hugo",
	},
	{
		robotYear: "2017",
		robotName: "Optimus",
	},
	{
		robotYear: "2018",
		robotName: "Aeleos",
	},
	{
		robotYear: "2019",
		robotName: "Venus",
	},
	{
		robotYear: "2020",
		robotName: "Mamba",
	},
	{
		robotYear: "2022",
		robotName: "Pegasus",
	},
	{
		robotYear: "2023",
		robotName: "Bolt",
	},
	{
		robotYear: "2024",
		robotName: "Toothless",
	},
	{
		robotYear: "2024 - iOS",
		robotName: "Willson",
	},
];

type RobotsObj = {
	[key: string]: RobotTabCard;
};

export const robots: RobotsObj = {
	'2024_ios': {
		robotName: "Willson",
		robotYear: "2024 - iOS",
		robotDescription: "Under the bumper intake, indexer and a shooter",
		robotImage: Willson,
	},
	'2024': {
		robotName: "Toothless",
		robotYear: "2024",
		robotDescription: "Continues elevator for climbing, for intake and outtake we had continues elevator with bottom and top rollers.",
		robotImage: Toothless,
	},
	'2023': {
		robotName: "Bolt",
		robotYear: "2023",
		robotDescription: "Bolt combines swerve drive mobility with a retractable telescoping arm for cone placement, enhanced by a powered roller intake system.",
		robotImage: Bolt,
	},
	'2022': {
		robotName: "Pegasus",
		robotYear: "2022",
		robotDescription: "A multi-stage telescoping arm with encoded linkage provides vertical mobility, coupled with a roller-driven floor intake system.",
		robotImage: Pegasus,
	},
	'2020': {
		robotName: "Mamba",
		robotYear: "2020",
		robotDescription: "The robot features a bumper-mounted intake feeding into a rotating indexer drum, paired with a servo-driven turret shooter for rapid field deployment.",
		robotImage: Mamba,
	},
	'2019': {
		robotName: "Venus",
		robotYear: "2019",
		robotDescription: "Hatch Trapper: A pneumatic-powered hatch trapper. Indexer: An elevator mechanism used as an indexer",
		robotImage: Venus,
	},
	'2018': {
		robotName: "Aeleos",
		robotYear: "2018",
		robotDescription: "Collection System: A telescopic arm equipped with a compliant wheel intake, specifically designed for efficient and reliable collection of yellow cubes. Chassis: A tank drive chassis,",
		robotImage: Aeleos,
	},
	'2017': {
		robotName: "Optimus",
		robotYear: "2017",
		robotDescription: "Climbing System: A high-performance robot capable of scaling a 1.5-meter rope in just 3-4 seconds. Shooting System: Fires up to 4 balls per second with an impressive 80% accuracy rate, ensuring efficient scoring. Gear Collecting System: Seamlessly collects gears from the charging station and directly transfers them into the lift for smooth operation.",
		robotImage: Optimus,
	},
	'2016': {
		robotName: "Hugo",
		robotYear: "2016",
		robotDescription: "Shooting System: A powerful catapult mechanism designed to launch objects over obstacles with precision into the opposing alliance's tower. Defense Shield: A robust shield strategically deployed to protect the team’s tower from incoming challenges.",
		robotImage: Hugo,
	},
	'2015': {
		robotName: "Moses",
		robotYear: "2015",
		robotDescription: "Collecting System: A wheeled arm designed to efficiently gather crates with precision and ease. Lifting System: A telescopic arm, enabling smooth and reliable elevation for optimal operation",
		robotImage: Moses,
	},
	'2014': {
		robotName: "Alpha",
		robotYear: "2014",
		robotDescription: "Collecting System: Two sturdy sticks connected by a durable strap, ensuring efficient and reliable operation. Shooting System: Powered by precision-engineered pistons for high accuracy and performance.",
		robotImage: Alpha,
	},
	'2013': {
		robotName: "Rocky",
		robotYear: "2013",
		robotDescription: "Cartridge frisbee storage system, Shooter frisbee firing system with horizontal wheel Climber piston powered climber",
		robotImage: Rocky,
	},
};

export { Robots, RobotsTabs };
