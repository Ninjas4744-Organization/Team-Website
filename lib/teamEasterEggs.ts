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
	"tal-ben-amram": {
		memberId: "tal-ben-amram",
		memberName: "Tal",
		image: "/assets/easter-eggs/tal.webp",
		birthday: { month: 2, day: 19 },
	},
	"kfir-nevo": {
		memberId: "kfir-nevo",
		memberName: "Kfir",
		image: "/assets/easter-eggs/kfir.webp",
		birthday: { month: 9, day: 21 },
	},
};

export function getTeamEasterEgg(memberId: string) {
	return teamEasterEggs[memberId];
}

export function isBirthdayToday(birthday?: Birthday, now = new Date()) {
	if (!birthday) {
		return false;
	}

	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: "Asia/Jerusalem",
		month: "numeric",
		day: "numeric",
	}).formatToParts(now);
	const month = Number(parts.find((part) => part.type === "month")?.value);
	const day = Number(parts.find((part) => part.type === "day")?.value);

	return month === birthday.month && day === birthday.day;
}
