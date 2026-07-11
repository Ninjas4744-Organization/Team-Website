'use client';

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import classNames from "classnames";
import { colors, fontSizes, mQuery } from "@/styles/vars";
import type { Robot } from "@/lib/types/Robot";

export type RobotNavItem = {
	id: string;
	name: string;
};

type RobotPageContainerProps = {
	robot: Robot;
	newerRobot?: RobotNavItem;
	olderRobot?: RobotNavItem;
};

function formatRank(rank: number): string {
	if (rank < 0) {
		return "N/A";
	}

	return `#${rank}`;
}

const PageWrapper = styled.div`
	width: 100%;
	max-width: 1480px;
	margin: 0 auto;
	padding: 2rem 1.5rem 3rem;

	${mQuery.mobile} {
		padding: 1.5rem 1rem 2.5rem;
	}
`;

const LayoutGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		"main"
		"left"
		"right";
	gap: 1.5rem;

	@media screen and (min-width: 1200px) {
		grid-template-columns: 220px minmax(0, 1fr) 240px;
		grid-template-areas: "left main right";
		gap: 2rem;
		align-items: start;
	}
`;

const LeftPanel = styled.aside`
	grid-area: left;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const RightPanel = styled.aside`
	grid-area: right;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const PanelCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.85rem;
	border: 1px solid ${colors.border};
	border-radius: 16px;
	padding: 1.25rem;
	background: ${colors.background};
`;

const PanelTitle = styled.h2`
	font-size: ${fontSizes.medium};
	font-weight: 600;
	color: ${colors.text.primary};
	text-transform: uppercase;
	letter-spacing: 0.06em;
`;

const PanelText = styled.p`
	font-size: ${fontSizes.medium};
	line-height: 1.5;
	color: ${colors.text.secondary};
`;

const StatList = styled.dl`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const StatItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;

const StatLabel = styled.dt`
	font-size: ${fontSizes.small};
	color: ${colors.text.secondary};
	text-transform: uppercase;
	letter-spacing: 0.04em;
`;

const StatValue = styled.dd`
	font-size: ${fontSizes.large};
	font-weight: 600;
	color: ${colors.text.primary};
`;

const NavLink = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 0.15rem;
	padding: 0.75rem;
	border-radius: 12px;
	border: 1px solid ${colors.border};
	background: ${colors.accent_background};
	transition: border-color 0.2s ease, background 0.2s ease;

	&:hover {
		border-color: rgba(59, 130, 246, 0.45);
		background: rgba(59, 130, 246, 0.08);
	}

	> ._direction {
		font-size: ${fontSizes.small};
		color: ${colors.text.secondary};
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	> ._name {
		font-size: ${fontSizes.medium};
		font-weight: 600;
		color: ${colors.text.primary};
	}
`;

const BackLink = styled(Link)`
	font-size: ${fontSizes.medium};
	font-weight: 600;
	color: ${colors.accent};

	&:hover {
		text-decoration: underline;
	}
`;

const Card = styled.article`
	grid-area: main;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border: 1px solid ${colors.border};
	border-radius: 16px;
	padding: 2rem;
	background: ${colors.background};
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);

	${mQuery.mobile} {
		padding: 1.25rem;
		gap: 1.5rem;
	}

	@media screen and (min-width: 1200px) {
		padding: 2.5rem;
	}
`;

const HeroSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
`;

const ImageFrame = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 10;
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid ${colors.border};
	background: ${colors.accent_background};
	box-shadow:
		0 0 0 1px rgba(59, 130, 246, 0.08),
		0 16px 32px rgba(0, 0, 0, 0.35);

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	@media screen and (min-width: 1200px) {
		aspect-ratio: 16 / 9;
		min-height: 480px;
	}
`;

const RobotName = styled.h1`
	font-size: clamp(2rem, 4vw, 3rem);
	font-weight: 700;
	line-height: 1.1;
	color: ${colors.text.primary};

	&._name_pekka {
		font-family: "Arial Black", "Arial Bold", sans-serif;
		font-weight: 900;
		letter-spacing: 0.04em;
		color: #c44dff;
		text-shadow:
			0 0 12px rgba(196, 77, 255, 0.55),
			0 0 28px rgba(160, 0, 255, 0.35),
			0 2px 4px rgba(0, 0, 0, 0.45);
	}

	${mQuery.mobile} {
		text-align: center;
	}
`;

const AboutSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;
`;

const SectionTitle = styled.h2`
	font-size: ${fontSizes.xlarge};
	font-weight: 600;
	color: ${colors.text.primary};
`;

const Description = styled.p`
	font-size: ${fontSizes.large};
	line-height: 1.75;
	color: ${colors.text.secondary};
	max-width: none;
`;

const CompList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

const CompBadge = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 0.4rem 0.7rem;
	border-radius: 8px;
	font-size: ${fontSizes.small};
	font-weight: 500;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	color: ${colors.text.primary};
	background: rgba(255, 255, 255, 0.04);
	border: 1px solid ${colors.border};
`;

function CompsSection({ comps }: { comps: string[] }) {
	if (comps.length === 0) {
		return null;
	}

	return (
		<>
			<PanelTitle>Competitions</PanelTitle>
			<CompList>
				{comps.map((comp) => (
					<CompBadge key={comp}>{comp}</CompBadge>
				))}
			</CompList>
		</>
	);
}

export function RobotPageContainer({
	robot,
	newerRobot,
	olderRobot,
}: RobotPageContainerProps) {
	const isPekka = robot.name === "P.E.K.K.A";

	return (
		<PageWrapper>
			<LayoutGrid>
				<LeftPanel>
					<PanelCard>
						<BackLink href="/robots">← All robots</BackLink>
						<PanelTitle>At a glance</PanelTitle>
						<StatList>
							<StatItem>
								<StatLabel>Season</StatLabel>
								<StatValue>{robot.year}</StatValue>
							</StatItem>
							<StatItem>
								<StatLabel>National rank</StatLabel>
								<StatValue>{formatRank(robot.nationalRank)}</StatValue>
							</StatItem>
							<StatItem>
								<StatLabel>World rank</StatLabel>
								<StatValue>{formatRank(robot.worldRank)}</StatValue>
							</StatItem>
						</StatList>
					</PanelCard>

					<PanelCard>
						<PanelTitle>Explore</PanelTitle>
						{newerRobot && (
							<NavLink href={`/robots/${newerRobot.id}`}>
								<span className="_direction">Newer</span>
								<span className="_name">{newerRobot.name}</span>
							</NavLink>
						)}
						{olderRobot && (
							<NavLink href={`/robots/${olderRobot.id}`}>
								<span className="_direction">Older</span>
								<span className="_name">{olderRobot.name}</span>
							</NavLink>
						)}
						{!newerRobot && !olderRobot && (
							<PanelText>This is the only robot on record.</PanelText>
						)}
					</PanelCard>
				</LeftPanel>

				<Card>
					<HeroSection>
						<ImageFrame>
							<Image
								src={`/assets/robots/${robot.name}.webp`}
								alt={`Robot ${robot.name}`}
								width={1200}
								height={675}
								priority
							/>
						</ImageFrame>

						<RobotName className={classNames({ _name_pekka: isPekka })}>
							{robot.name}
						</RobotName>
					</HeroSection>

					<AboutSection>
						<SectionTitle>About</SectionTitle>
						<Description>{robot.description}</Description>
					</AboutSection>
				</Card>

				<RightPanel>
					{robot.comps.length > 0 && (
						<PanelCard>
							<CompsSection comps={robot.comps} />
						</PanelCard>
					)}
				</RightPanel>
			</LayoutGrid>
		</PageWrapper>
	);
}
