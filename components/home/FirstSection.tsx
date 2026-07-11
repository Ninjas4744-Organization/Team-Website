"use client";

import Image from "next/image";
import styled from "styled-components";
import siteConfig from "@/config/siteConfig";
import { colors, fontSizes, mQuery } from "@/styles/vars";

const FirstSectionContainer = styled.section`
	width: 100%;
	padding: 2.5rem 1.5rem;
	background: ${colors.accent_background};
	border-block: 1px solid ${colors.border};

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
		color: ${colors.accent};
		font-size: ${fontSizes.medium};
		font-weight: 600;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
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
