import { notFound } from "next/navigation";
import MemberDialog from "@/components/team/MemberDialog";
import { getTeamEasterEgg, isBirthdayToday } from "@/lib/teamEasterEggs";
import {Metadata} from "next";

export const dynamic = "force-dynamic";

type EasterEggPageProps = {
	params: Promise<{ member: string }>;
};

export async function generateMetadata({ params }: EasterEggPageProps): Promise<Metadata> {
	const { member } = await params;
	const easterEgg = getTeamEasterEgg(member);
	if (!easterEgg) notFound();

	const isBirthday = isBirthdayToday(easterEgg.birthday);

	return {
		title: isBirthday ? `Happy birthday ${easterEgg.memberName}!` : `${easterEgg.memberName} | Da Vinci 4744`,
		description: easterEgg.memberName,
	};
}

export default async function EasterEggPage({ params }: EasterEggPageProps) {
	const { member } = await params;
	const easterEgg = getTeamEasterEgg(member);
	if (!easterEgg) notFound();

	return <MemberDialog member={easterEgg} />;
}
