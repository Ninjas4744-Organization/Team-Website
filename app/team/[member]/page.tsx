import { notFound } from "next/navigation";
import MemberDialog from "@/components/team/MemberDialog";
import { getTeamEasterEgg } from "@/lib/teamEasterEggs";

type EasterEggPageProps = {
	params: Promise<{ member: string }>;
};

export async function generateMetadata({ params }: EasterEggPageProps) {
	const { member } = await params;
	const easterEgg = getTeamEasterEgg(member);
	if (!easterEgg) notFound();

	const isBirthday = easterEgg.birthday &&
		new Date().getMonth() === easterEgg.birthday.month - 1 &&
		new Date().getDate() === easterEgg.birthday.day;

	return {
		title: isBirthday ? `Happy birthday ${easterEgg.memberName}!` : `${easterEgg.memberName} | Ninjas #4744`,
		description: easterEgg.memberName,
	};
}

export default async function EasterEggPage({ params }: EasterEggPageProps) {
	const { member } = await params;
	const easterEgg = getTeamEasterEgg(member);
	if (!easterEgg) notFound();

	return <MemberDialog member={easterEgg} />;
}
