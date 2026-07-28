import { notFound } from "next/navigation";
import MemberDialog from "@/components/team/MemberDialog";
import { getTeamEasterEgg } from "@/lib/teamEasterEggs";

type EasterEggModalProps = {
	params: Promise<{ member: string }>;
};

export default async function EasterEggModal({ params }: EasterEggModalProps) {
	const { member } = await params;
	const easterEgg = getTeamEasterEgg(member);
	if (!easterEgg) notFound();

	return <MemberDialog member={easterEgg} closeWithBack />;
}
