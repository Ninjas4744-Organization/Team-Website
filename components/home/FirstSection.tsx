"use client";

import Image from "next/image";
import styled from "styled-components";
import siteConfig from "@/config/siteConfig";
import { colors, fontSizes, mQuery } from "@/styles/vars";

const FirstSectionContainer = styled.section`
	width: 100%;
	padding: 3.5rem 1.5rem;
	background: ${colors.accent_background};
	border-block: 1px solid ${colors.border};
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), inset 0 -1px 0 rgba(0, 0, 0, 0.1);

	${mQuery.mobile} {
		padding: 2rem 1rem;
	}
`;

const Inner = styled.div`
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	text-align: center;
`;

const LogoWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 1.25rem;
	border: 1px solid ${colors.border};
	border-radius: 14px;
	background: rgba(255, 255, 255, 0.05);
`;

const Title = styled.h2`
	font-size: ${fontSizes.xxlarge};
	font-weight: 600;
	color: ${colors.text.primary};
`;

const Text = styled.p`
	font-size: ${fontSizes.large};
	line-height: 1.75;
	color: ${colors.text.secondary};
`;

const Links = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;

	a {
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		padding: 0.55rem 0.9rem;
		border: 1px solid ${colors.accent};
		border-radius: 999px;
		background: ${colors.accentSoft};
		color: ${colors.accentHover};
		font-size: ${fontSizes.medium};
		font-weight: 600;
		text-decoration: none;
		transition: background 180ms ease, color 180ms ease, transform 180ms ease;

		&:hover {
			background: ${colors.accent};
			color: ${colors.text.onAccent};
			transform: translateY(-2px);
		}
	}
`;

export const FirstSection: React.FC = () => {
	return (
		<FirstSectionContainer>
			<Inner>
				<LogoWrap>
					<Image
						src="/assets/FirstLogo.svg"
						alt="FIRST logo"
						width={160}
						height={48}
					/>
				</LogoWrap>
				<Title>What is FIRST?</Title>
				<Text>
					FIRST (For Inspiration and Recognition of Science and Technology) is a
					global nonprofit founded in 1989 to inspire young people in STEM through
					hands-on robotics programs. Its flagship high school program, FIRST
					Robotics Competition (FRC), challenges teams to design, build, and
					program robots while developing real-world engineering and teamwork
					skills.
				</Text>
				<Links>
					<a href={siteConfig.siteLinks.first} target="_blank" rel="noreferrer">
						Visit FIRST
					</a>
				</Links>
			</Inner>
		</FirstSectionContainer>
	);
};
