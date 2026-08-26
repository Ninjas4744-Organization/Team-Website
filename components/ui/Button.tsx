import styled from "styled-components";
import {colors} from "@/styles/vars";

export const Button = styled.button`
	border: 1px solid ${colors.border};
	border-radius: 12px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	padding: 0.65rem 0.8rem;
	gap: 0.5rem;
	box-sizing: border-box;
	line-height: 1.25rem;
	background: ${colors.surfaceRaised};
	color: ${colors.text.primary};
	transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;

	&:hover, &._active {
		background: ${colors.accentSoft};
		border-color: ${colors.accent};
		box-shadow: 0 0.5rem 1.25rem rgba(20, 37, 48, 0.18);
		transform: translateY(-1px);
	}
`;
