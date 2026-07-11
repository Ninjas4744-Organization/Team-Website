export type Robot = {
	name: string;
	year: number;
	description: string;
	comps: string[];
	label: string;
	nationalRank: number;
	worldRank: number;
};

export type RobotItem = Robot & {
	id: string;
};
