import styled from "styled-components";
import {colors} from "@/styles/vars";

export const Button = styled.button`
	border: 1px solid ${colors.border};
	border-radius: 10px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	padding: 0.75rem;
	gap: 0.5rem;
	box-sizing: border-box;
	line-height: 1.25rem;

	&:hover, &._active {
		background-color: ${colors.border};
	}
`;
