import Image from "next/image";
import Link from "next/link";
import { isBirthdayToday, type TeamEasterEgg } from "@/lib/teamEasterEggs";
import MemberDialogShell from "./MemberDialogShell";

type MemberProps = {
	member: TeamEasterEgg;
};

export default function MemberDialog({ member }: MemberProps) {
	const isBirthday = isBirthdayToday(member.birthday);
	const title = isBirthday ? `Happy birthday, ${member.memberName}! 🎉` : `${member.memberName} says hello`;

	return (
		<MemberDialogShell>
			<Link className="_backdrop" href="/team" aria-label="Close Easter egg" />
			{isBirthday && (
				<div className="_confetti" aria-hidden="true">
					{Array.from({ length: 24 }, (_, index) => (
						<span
							key={index}
							style={{
								left: `${(index * 37) % 100}%`,
								animationDelay: `${(index % 6) * -0.4}s`,
								"--confetti-index": index,
							} as React.CSSProperties}
						/>
					))}
				</div>
			)}
			<div className="_content">
				<Link className="_close" href="/team" aria-label="Close Easter egg">×</Link>
				<h2 id="easter-egg-title" className="_title">{title}</h2>
				<Image
					className="_image"
					src={member.image}
					alt={`${member.memberName}'s Easter egg`}
					width={250}
					height={250}
					unoptimized
				/>
			</div>
		</MemberDialogShell>
	);
}
