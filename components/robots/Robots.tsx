'use client';

import styled from 'styled-components';
import RobotListItem from '@/components/robots/Robot';
import type { RobotItem } from '@/lib/types/Robot';
import Page from '@/components/layout/Page';
import { colors, fontSizes, mQuery } from '@/styles/vars';

type RobotsPageProps = {
	robots: RobotItem[];
};

const RobotsPage = styled(Page)`
	max-width: 1240px;
	padding-bottom: 4rem;
`;

const SectionHeader = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
	gap: 1rem;
	margin-bottom: 1.25rem;

	h2 {
		color: ${colors.text.primary};
		font-size: clamp(1.55rem, 3vw, 2rem);
	}

	p {
		color: ${colors.text.secondary};
		font-size: ${fontSizes.small};
	}

	${mQuery.mobile} {
		align-items: flex-start;
		flex-direction: column;
	}
`;

const RobotsList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1.25rem;
	list-style: none;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;

export default function Robots({ robots }: RobotsPageProps) {
	return (
		<RobotsPage>
			<section aria-labelledby="robot-archive-title">
				<SectionHeader>
					<h1 id="robot-archive-title">Our robots</h1>
					<p>Newest to oldest · Select a robot to see its full story</p>
				</SectionHeader>
				<RobotsList>
					{robots.map((robot) => <RobotListItem key={robot.id} {...robot} />)}
				</RobotsList>
			</section>
		</RobotsPage>
	);
}
