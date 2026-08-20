"use client";

import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "@/styles/vars";

const popIn = keyframes`
	from { opacity: 0; transform: scale(0.85); }
	to { opacity: 1; transform: scale(1); }
`;

const fall = keyframes`
	from { transform: translateY(-12vh) rotate(0deg); opacity: 1; }
	to { transform: translateY(112vh) rotate(720deg); opacity: 0; }
`;

const Shell = styled.div`
	position: fixed;
	inset: 0;
	z-index: 100;
	display: grid;
	place-items: center;
	padding: 1.5rem;
	overflow: hidden;
	background: rgb(0 0 0 / 78%);

	> ._backdrop {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

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
			display: grid;
			width: 2.25rem;
			height: 2.25rem;
			place-items: center;
			border-radius: 999px;
			background: rgb(255 255 255 / 12%);
			color: ${colors.text.primary};
			cursor: pointer;
			font-size: 1.5rem;
			line-height: 1;
			text-decoration: none;
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

		> ._video {
			width: min(100%, 19rem);
			max-height: 55vh;
			border-radius: 0.75rem;
			background: #000;
		}
	}
`;

type MemberDialogShellProps = {
	children: ReactNode;
};

export default function MemberDialogShell({ children }: MemberDialogShellProps) {
	return <Shell aria-labelledby="easter-egg-title" aria-modal="true" role="dialog">{children}</Shell>;
}
