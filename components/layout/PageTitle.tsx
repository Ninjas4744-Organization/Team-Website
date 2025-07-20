"use client";
import styled from "styled-components";
import {colors, mQuery} from "@/styles/vars";

const PageTitle = styled.h2`
	display: flex;
	font-size: 1.6rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${colors.text.primary};
	align-items: center;

	${mQuery.mobile} {
		font-size: 1.3rem;
		text-align: center;
	}
`;

export default PageTitle;
