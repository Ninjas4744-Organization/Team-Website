export type Birthday = {
	month: number;
	day: number;
};

export type TeamEasterEgg = {
	memberId: string;
	memberName: string;
	image: string;
	birthday?: Birthday;
};

const teamEasterEggs: Record<string, TeamEasterEgg> = {
	"eitan-grimblat": {
		memberId: "eitan-grimblat",
		memberName: "Eitan",
		image: "/assets/easter-eggs/eitan.webp",
		birthday: { month: 7, day: 28 },
	},
};

export function getTeamEasterEgg(memberId: string) {
	return teamEasterEggs[memberId];
}
