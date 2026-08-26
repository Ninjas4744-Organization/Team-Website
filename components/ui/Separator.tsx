import styled from "styled-components";
import {colors} from "@/styles/vars";

export const Separator = styled.div`
	height: 1px;
	background-color: ${colors.border};
	margin: 10px 0;
	border: none;
	opacity: 1;
	width: 100%;
	display: block;
	box-sizing: border-box;
	border-radius: 0.25rem;
`;
