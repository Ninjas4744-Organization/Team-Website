export type Birthday = {
	month: number;
	day: number;
};

export type TeamEasterEgg = {
	memberId: string;
	memberName: string;
	media: string;
	mediaType: "image" | "video";
	birthday?: Birthday;
};

const teamEasterEggs: Record<string, TeamEasterEgg> = {
	"eitan-grimblat": {
		memberId: "eitan-grimblat",
		memberName: "Eitan",
		media: "/assets/easter-eggs/eitan.webp",
		mediaType: "image",
		birthday: { month: 7, day: 28 },
	},
	"tal-ben-amram": {
		memberId: "tal-ben-amram",
		memberName: "Tal",
		media: "/assets/easter-eggs/tal.webp",
		mediaType: "image",
		birthday: { month: 2, day: 19 },
	},
	"kfir-nevo": {
		memberId: "kfir-nevo",
		memberName: "Kfir",
		media: "/assets/easter-eggs/kfir.webp",
		mediaType: "image",
		birthday: { month: 9, day: 21 },
	},
	"elhay-journo": {
		memberId: "elhay-journo",
		memberName: "Elhay",
		media: "/assets/easter-eggs/elhay.gif",
		mediaType: "image",
		birthday: { month: 8, day: 19 },
	},
	"gavriel-ilizirov": {
		memberId: "gavriel-ilizirov",
		memberName: "Gavriel",
		media: "/assets/easter-eggs/gavriel.mp4",
		mediaType: "video",
		birthday: { month: 8, day: 20 },
	},
	"adi-maymon": {
		memberId: "adi-maymon",
		memberName: "Adi",
		media: "/assets/easter-eggs/adi.webp",
		mediaType: "image",
		birthday: { month: 4, day: 26 },
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
