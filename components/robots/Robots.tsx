'use client';

import styled from 'styled-components';
import RobotListItem from '@/components/robots/Robot';
import type {RobotItem} from "@/lib/types/Robot";
import Page from "@/components/layout/Page";
import PageTitle from "@/components/layout/PageTitle";
import {colors} from "@/styles/vars";

type RobotsPageProps = {
	robots: RobotItem[];
}

const Description = styled.p`
	margin-bottom: 2rem;
	color: ${colors.text.primary};
`;

const RobotsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export default function RobotsPage({robots}: RobotsPageProps) {
	return (
		<Page>
			<PageTitle>Our robots 🤖</PageTitle>
			<Description>Our robots since 2013</Description>
			<RobotsList>
				{robots.map((robot, i) => (
					<RobotListItem key={i} {...robot} />
				))}
			</RobotsList>
		</Page>
	);
}
