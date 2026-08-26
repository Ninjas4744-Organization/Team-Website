'use client';

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import classNames from "classnames";
import { colors, fontSizes, mQuery } from "@/styles/vars";
import type { Robot, RobotAward, RobotBanner } from "@/lib/types/Robot";
import type { ReactNode } from 'react';
import { getTbaEventName, getTbaEventUrl } from '@/lib/tbaEvents';
import { FaArrowUpRightFromSquare, FaAward, FaCode, FaComments, FaLink, FaYoutube } from 'react-icons/fa6';

export type RobotNavItem = {
	id: string;
	name: string;
};

type RobotPageContainerProps = {
	robot: Robot;
	content: ReactNode;
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
	border-radius: 18px;
	padding: 1.25rem;
	background: ${colors.surface};
	box-shadow: 0 1rem 2.25rem rgba(22, 38, 49, 0.14);
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
	border-radius: 14px;
	border: 1px solid ${colors.border};
	background: ${colors.accent_background};
	transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;

	&:hover {
		border-color: ${colors.accent};
		background: ${colors.accentSoft};
		transform: translateY(-2px);
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
	border-radius: 18px;
	padding: 2rem;
	background: ${colors.surface};
	box-shadow: 0 1.5rem 3.5rem rgba(22, 38, 49, 0.24);

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
	border-radius: 18px;
	overflow: hidden;
	border: 1px solid ${colors.border};
	background: ${colors.accent_background};
	box-shadow:
		0 0 0 1px ${colors.accentSoft},
		0 1rem 2.25rem rgba(22, 38, 49, 0.3);

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

const MdxContent = styled.div`
	font-size: ${fontSizes.large};
	line-height: 1.75;
	color: ${colors.text.secondary};

	p + p {
		margin-top: 1rem;
	}
`;

const CompList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

const CompBadge = styled.a`
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
	transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

	&:hover {
		color: ${colors.accentHover};
		border-color: ${colors.accent};
		background: ${colors.accentSoft};
	}

	&:focus-visible {
		outline: 2px solid ${colors.accent};
		outline-offset: 2px;
	}
`;

const BannerSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const BannerShelf = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	align-items: flex-start;
	justify-content: center;
`;

const BlueBannerLink = styled.a`
	display: flex;
	justify-content: center;
	width: 180px;
	filter: drop-shadow(0 12px 14px rgba(0, 0, 0, 0.38));
	transition: transform 0.2s ease, filter 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		filter: drop-shadow(0 1rem 1.15rem rgba(22, 38, 49, 0.36));
	}

	&:focus-visible {
		outline: 3px solid ${colors.accent};
		outline-offset: 5px;
	}
`;

const BlueBanner = styled.div`
	background: #0f4bcb;
	color: #fff;
	display: inline-block;
	height: 170px;
	line-height: 1.2;
	margin: 0 0 40px;
	padding: 8px;
	position: relative;
	text-align: center;
	vertical-align: top;
	white-space: normal;
	width: 140px;

	&::after {
		border-bottom: 70px solid #0f4bcb;
		border-color: #0f4bcb #0f4bcb transparent;
		border-style: solid;
		border-width: 5px 70px 20px;
		content: "";
		display: block;
		left: 0;
		position: absolute;
		top: 100%;
	}
`;

const BannerIcon = styled(Image)`
	margin-bottom: 10px;
	margin-top: 10px;
	max-height: 45px;
	width: 75px;
`;

const AwardName = styled.span`
	display: table;
	font-weight: bolder;
	height: 35px;
	margin: 3px 0;
	width: 100%;
`;

const AwardEvent = styled.span`
	font-size: 85%;
	line-height: 130%;
`;

const AwardsSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	margin-top: 0.35rem;
`;

const AwardsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.55rem;
`;

const AwardLink = styled.a`
	display: grid;
	grid-template-columns: auto minmax(0, 1fr);
	gap: 0.7rem;
	align-items: flex-start;
	padding: 0.7rem;
	border: 1px solid ${colors.border};
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.025);
	transition: border-color 0.2s ease, background 0.2s ease;

	&:hover {
		border-color: ${colors.accent};
		background: ${colors.accentSoft};
	}

	&:focus-visible {
		outline: 2px solid ${colors.accentHover};
		outline-offset: 2px;
	}

	> svg {
		margin-top: 0.15rem;
		color: ${colors.accent};
		font-size: 1rem;
	}
`;

const AwardDetails = styled.span`
	display: flex;
	min-width: 0;
	flex-direction: column;
	gap: 0.2rem;
`;

const RecognitionName = styled.strong`
	color: ${colors.text.primary};
	font-size: ${fontSizes.small};
	line-height: 1.35;
`;

const RecognitionEvent = styled.span`
	color: ${colors.text.secondary};
	font-size: 0.75rem;
	line-height: 1.35;
`;

const LinksList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.55rem;
`;

const ResourceLink = styled.a`
	display: grid;
	grid-template-columns: auto minmax(0, 1fr) auto;
	align-items: center;
	gap: 0.7rem;
	padding: 0.75rem;
	border: 1px solid ${colors.border};
	border-radius: 12px;
	background: ${colors.accent_background};
	color: ${colors.text.primary};
	font-size: ${fontSizes.small};
	font-weight: 600;
	transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;

	&:hover {
		border-color: ${colors.accent};
		background: ${colors.accentSoft};
		transform: translateY(-2px);
	}

	&:focus-visible {
		outline: 2px solid ${colors.accent};
		outline-offset: 2px;
	}

	> svg:first-child {
		color: ${colors.accent};
		font-size: 1rem;
	}

	> svg:last-child {
		color: ${colors.text.secondary};
		font-size: 0.7rem;
	}
`;

function RobotLinkIcon({ type }: { type?: 'code' | 'build-thread' | 'video' | 'other' }) {
	if (type === 'code') return <FaCode aria-hidden="true" />;
	if (type === 'build-thread') return <FaComments aria-hidden="true" />;
	if (type === 'video') return <FaYoutube aria-hidden="true" />;
	return <FaLink aria-hidden="true" />;
}

function CompsSection({ comps, banners, awards, year }: { comps: string[], banners?: RobotBanner[], awards?: RobotAward[], year: number }) {
	if (comps.length === 0) {
		return null;
	}

	return (
		<>
			<PanelTitle>Competitions</PanelTitle>
			<CompList>
				{comps.map((comp) => (
					<CompBadge
						key={comp}
						href={getTbaEventUrl(comp)}
						target="_blank"
						rel="noopener noreferrer"
						title={`View ${getTbaEventName(comp)} on The Blue Alliance`}
					>
						{getTbaEventName(comp)}
					</CompBadge>
				))}
			</CompList>
			{banners && banners.length > 0 && (
				<BannerSection aria-labelledby="blue-banners-title">
					<BannerShelf>
						{banners.map((banner) => (
							<BlueBannerLink
								key={banner.eventKey}
								href={getTbaEventUrl(banner.eventKey)}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${banner.title} at ${getTbaEventName(banner.eventKey)} — view on The Blue Alliance`}
							>
								<BlueBanner>
									<BannerIcon
										src="/assets/FirstIcon.svg"
										width={75}
										height={45}
										alt=""
										aria-hidden="true"
									/>
									<AwardName>{banner.title}</AwardName>
									<AwardEvent>{year} {getTbaEventName(banner.eventKey)}</AwardEvent>
								</BlueBanner>
							</BlueBannerLink>
						))}
					</BannerShelf>
				</BannerSection>
			)}
			{awards && awards.length > 0 && (
				<AwardsSection aria-labelledby="awards-title">
					<PanelTitle id="awards-title">Awards</PanelTitle>
					<AwardsList>
						{awards.map((award) => (
							<AwardLink
								key={`${award.eventKey}-${award.title}`}
								href={getTbaEventUrl(award.eventKey)}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${award.title} at ${getTbaEventName(award.eventKey)} — view on The Blue Alliance`}
							>
								<FaAward aria-hidden="true" />
								<AwardDetails>
									<RecognitionName>{award.title}</RecognitionName>
									<RecognitionEvent>{getTbaEventName(award.eventKey)}</RecognitionEvent>
								</AwardDetails>
							</AwardLink>
						))}
					</AwardsList>
				</AwardsSection>
			)}
		</>
	);
}

export function RobotPageContainer({
	robot,
	content,
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
						<MdxContent>{content}</MdxContent>
					</AboutSection>
				</Card>

				<RightPanel>
					{robot.comps.length > 0 && (
						<PanelCard>
							<CompsSection comps={robot.comps} banners={robot.banners} awards={robot.awards} year={robot.year} />
						</PanelCard>
					)}
					{robot.links && robot.links.length > 0 && (
						<PanelCard>
							<PanelTitle>Links</PanelTitle>
							<LinksList>
								{robot.links.map((resource) => (
									<ResourceLink
										key={`${resource.url}-${resource.label}`}
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<RobotLinkIcon type={resource.type} />
										<span>{resource.label}</span>
										<FaArrowUpRightFromSquare aria-hidden="true" />
									</ResourceLink>
								))}
							</LinksList>
						</PanelCard>
					)}
				</RightPanel>
			</LayoutGrid>
		</PageWrapper>
	);
}
