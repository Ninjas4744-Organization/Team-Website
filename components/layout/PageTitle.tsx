"use client";
import styled from "styled-components";
import {colors, fontSizes, mQuery} from "@/styles/vars";

const PageTitle = styled.h2`
	display: flex;
	font-size: ${fontSizes.xxlarge};
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${colors.text.primary};
	align-items: center;

	${mQuery.mobile} {
		font-size: ${fontSizes.xlarge};
		text-align: center;
	}
`;

export default PageTitle;
