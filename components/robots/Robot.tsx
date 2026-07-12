'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import styled from 'styled-components';
import { colors, fontSizes } from '@/styles/vars';
import type { RobotItem } from '@/lib/types/Robot';

const Card = styled.li`
	min-width: 0;
`;

const CardLink = styled(Link)`
	display: flex;
	min-height: 100%;
	flex-direction: column;
	overflow: hidden;
	border: 1px solid ${colors.border};
	border-radius: 20px;
	background: ${colors.background};
	transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

	&:hover {
		transform: translateY(-4px);
		border-color: rgba(59, 130, 246, 0.65);
		box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
	}

	&:focus-visible {
		outline: 3px solid ${colors.accent};
		outline-offset: 4px;
	}
`;

const ImageFrame = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 10;
	overflow: hidden;
	background: ${colors.accent_background};

	img {
		object-fit: cover;
		transition: transform 350ms ease;
	}

	${CardLink}:hover & img {
		transform: scale(1.035);
	}
`;

const YearBadge = styled.span`
	position: absolute;
	top: 1rem;
	left: 1rem;
	display: inline-flex;
	align-items: center;
	min-height: 30px;
	padding: 0.35rem 0.7rem;
	border: 1px solid rgba(255, 255, 255, 0.18);
	border-radius: 999px;
	background: rgba(9, 9, 11, 0.78);
	backdrop-filter: blur(8px);
	color: #fff;
	font-size: ${fontSizes.small};
	font-weight: 700;
`;

const Content = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 0.9rem;
	padding: 1.25rem;
`;

const HeadingRow = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1rem;
`;

const Summary = styled.p`
	display: -webkit-box;
	overflow: hidden;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	color: ${colors.text.secondary};
	font-size: ${fontSizes.medium};
	line-height: 1.55;
`;

const Title = styled.h2`
	font-size: 1.45rem;
	line-height: 1.15;
	color: ${colors.text.primary};
`;

const Type = styled.span`
	flex: none;
	padding: 0.28rem 0.55rem;
	border-radius: 7px;
	background: rgba(59, 130, 246, 0.12);
	color: #7db2ff;
	font-size: 0.72rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	text-transform: uppercase;
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	margin-top: auto;
	padding-top: 0.2rem;
`;

const Achievement = styled.span`
	color: ${colors.text.secondary};
	font-size: ${fontSizes.small};

	strong {
		color: ${colors.text.primary};
	}
`;

const Explore = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 0.45rem;
	color: ${colors.accent};
	font-size: ${fontSizes.small};
	font-weight: 700;

	svg {
		font-size: 0.75rem;
		transition: transform 180ms ease;
	}

	${CardLink}:hover & svg {
		transform: translateX(3px);
	}
`;

export default function RobotListItem(robot: RobotItem) {
	const { id, name, label, summary, nationalRank } = robot;
	const isOffseason = id.endsWith('_ios');
	const achievement = nationalRank > 0
		? nationalRank === 1
			? 'National champion'
			: `National rank #${nationalRank}`
		: `${robot.comps.length} competition${robot.comps.length === 1 ? '' : 's'}`;

	return (
		<Card>
			<CardLink href={`/robots/${id}`} aria-label={`Explore ${name}, the ${label} robot`}>
				<ImageFrame>
					<Image
						src={`/assets/robots/${name}.webp`}
						alt={`${name}, Team 4744's ${label} robot`}
						fill
						sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
					/>
					<YearBadge>{label}</YearBadge>
				</ImageFrame>
				<Content>
					<HeadingRow>
						<Title>{name}</Title>
						<Type>{isOffseason ? 'Offseason' : 'FRC season'}</Type>
					</HeadingRow>
					<Summary>{summary}</Summary>
					<Footer>
						<Achievement><strong>{achievement}</strong></Achievement>
						<Explore>Meet the robot <FaArrowRight aria-hidden="true" /></Explore>
					</Footer>
				</Content>
			</CardLink>
		</Card>
	);
}
