export type Robot = {
	name: string;
	year: number;
	description: string;
	comps: string[];
	label: string;
};

export type RobotItem = Robot & {
	id: string;
};
