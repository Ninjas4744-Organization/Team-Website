/* eslint-disable @next/next/no-img-element -- Easter-egg WebPs may be animated, so they are served unchanged. */
"use client";

import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";
import type { TeamEasterEgg } from "@/lib/teamEasterEggs";
import { colors } from "@/styles/vars";

const popIn = keyframes`
	from { opacity: 0; transform: scale(0.85); }
	to { opacity: 1; transform: scale(1); }
`;

const fall = keyframes`
	from { transform: translateY(-12vh) rotate(0deg); opacity: 1; }
	to { transform: translateY(112vh) rotate(720deg); opacity: 0; }
`;

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 100;
	display: grid;
	place-items: center;
	padding: 1.5rem;
	background: rgb(0 0 0 / 78%);
	overflow: hidden;

	> ._confetti {
		position: absolute;
		inset: 0;
		pointer-events: none;

		> span {
			position: absolute;
			top: 0;
			width: 0.75rem;
			height: 1.5rem;
			border-radius: 0.125rem;
			background: hsl(calc(var(--confetti-index) * 43deg) 90% 62%);
			animation: ${fall} 2.4s linear infinite;
		}
	}

	> ._content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: min(100%, 26rem);
		padding: 1.5rem;
		border: 2px solid ${colors.accent};
		border-radius: 1rem;
		background: ${colors.background};
		box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 50%);
		animation: ${popIn} 250ms ease-out;

		> ._close {
			position: absolute;
			top: 0.75rem;
			right: 0.75rem;
			width: 2.25rem;
			height: 2.25rem;
			border: 0;
			border-radius: 999px;
			background: rgb(255 255 255 / 12%);
			color: ${colors.text.primary};
			cursor: pointer;
			font-size: 1.5rem;
			line-height: 1;
		}

		> ._title {
			margin: 0;
			padding-inline: 2rem;
			color: ${colors.text.primary};
			font-size: clamp(2rem, 8vw, 3.25rem);
			line-height: 1;
			text-align: center;
		}

		> ._image {
			width: min(100%, 19rem);
			height: auto;
			border-radius: 0.75rem;
		}
	}
`;

type MemberProps = {
	member: TeamEasterEgg;
	closeWithBack?: boolean;
};

export default function MemberDialog({ member, closeWithBack = false }: MemberProps) {
	const router = useRouter();
	const today = new Date();
	const isBirthday = Boolean(
		member.birthday
		&& today.getMonth() + 1 === member.birthday.month
		&& today.getDate() === member.birthday.day,
	);

	const close = () => {
		if (closeWithBack) {
			router.back();
			return;
		}

		router.replace("/team");
	};
	const title = isBirthday ? `Happy birthday, ${member.memberName}! 🎉` : "Easter egg unlocked!";

	return (
		<Overlay aria-labelledby="easter-egg-title" aria-modal="true" role="dialog" onClick={close}>
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
			<div className="_content" onClick={(event) => event.stopPropagation()}>
				<button className="_close" type="button" aria-label="Close Easter egg" onClick={close}>×</button>
				<h2 id="easter-egg-title" className="_title">{title}</h2>
				<img className="_image" src={member.image} alt={`${member.memberName}'s Easter egg`} />
			</div>
		</Overlay>
	);
}
