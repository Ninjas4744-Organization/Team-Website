export type RobotBanner = {
	eventKey: string;
	title: string;
};

export type RobotAward = {
	eventKey: string;
	title: string;
};

export type RobotLink = {
	label: string;
	url: string;
	type?: 'code' | 'build-thread' | 'other';
};

export type Robot = {
	name: string;
	year: number;
	summary: string;
	comps: string[];
	label: string;
	nationalRank: number;
	worldRank: number;
	banners?: RobotBanner[];
	awards?: RobotAward[];
	links?: RobotLink[];
};

export type RobotItem = Robot & {
	id: string;
};
