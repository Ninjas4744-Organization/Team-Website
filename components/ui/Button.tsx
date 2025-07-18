import styled from "styled-components";

export const Button = styled.button`
	border: 1px solid #27272b;
	border-radius: 10px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	padding: 0.75rem;
	gap: 0.5rem;
	box-sizing: border-box;
	line-height: 1.25rem;

	&:hover, &._active {
		background-color: #27272b;
	}
`;
