"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import blankPicture from "@/public/assets/people/blankPicture.png";
import ImageCard from "@/components/home/ImageCard";
import styled from "styled-components";
import {Hero} from "@/components/ui/Hero";
import { getTeamEasterEgg } from "@/lib/teamEasterEggs";
import {colors, fontSizes, mQuery} from "@/styles/vars";
import DaVinciHeroTitle from "@/public/assets/DaVinciHeroTitleOneLine.png";

const TeamPageContainer = styled.div`
	max-width: 100%;
	margin-bottom: 1.25rem;
	padding: 0;
	
	> ._section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding-inline: 0.5rem;
		width: 100%;
		margin: 1.5rem 0;
		
		> ._titles {
			display: flex;
			align-items: center;
			flex-direction: column;
			gap: 0.5rem;
			width: 100%;
			
			> * {
				text-align: center;
				width: 100%;
			}
			
			> ._title {
				font-size: ${fontSizes.xxlarge};
				font-weight: 600;
			}
			
			> ._subtitle {
				color: ${colors.text.secondary};
				
			}
		}
		
		> ._cards-wrapper {
			width: 100%;
			max-width: calc(5 * 250px + 4 * 1.25rem);
			margin-top: 1.25rem;

			> ._cards {
				display: flex;
				flex-wrap: wrap;
				align-items: flex-start;
				gap: 1.25rem;

				> * {
					flex: 0 0 250px;
				}

				${mQuery.mobile} {
					flex-direction: column;
					gap: 0.75rem;
					align-items: center;

					> * {
						flex: 1;
					}
				}
			}
		}
	}
`;
const TeamPage = () => {
	const router = useRouter();
	// Define team leads and mentors data
	const teamLeads = [
		{ id: "elhay-journo", name: "Elhay Journo", role: "Software", image: blankPicture },
		{ id: "ouriel-vana", name: "Ouriel Vana", role: "Electrical", image: blankPicture },
		{ id: "gavriel-ilizirov", name: "Gavriel Ilizirov", role: "Mechanics", image: blankPicture },
		{ id: "noa-zrihan", name: "Noa Zrihan", role: "C&M", image: blankPicture },
	];

	const mentors = [
		{ id: "ido-shoshani", name: "Ido Shoshani", role: "Strategy", image: blankPicture },
		{ id: "guy-pacha", name: "Guy Pacha", role: "Strategy", image: blankPicture },
		{ id: "shai-leib", name: "Shai Leib", role: "Lead Mentor & Mechanics", image: blankPicture },
		{ id: "tal-ben-amram", name: "Tal Ben Amram", role: "Software", image: blankPicture },
		{ id: "kfir-nevo", name: "Kfir Nevo", role: "C&M", image: blankPicture },
		{ id: "jacob-nazarov", name: "Jacob Nazarov", role: "CAD", image: blankPicture },
		{ id: "adi-noam-maymon", name: "Adi Noam Maymon", role: "Electrical", image: blankPicture },
	];

	return (
		<TeamPageContainer>
			<Hero
				images={['/assets/teamPicture2026.webp']}
				title={<Image alt="Da Vinci 4744" className="_wordmark" priority src={DaVinciHeroTitle} />}
				subtitle="Team" />
			<div className="_section">
				<div className="_titles">
					<h2 className="_title">Mentors</h2>
					<p className="_subtitle">Meet our mentors</p>
				</div>
				<div className="_cards-wrapper">
					<div className="_cards">
						{mentors.map((item) => {
							const easterEgg = getTeamEasterEgg(item.id);

							return (
								<ImageCard
									key={item.id}
									image={item.image}
									name={item.name}
									role={item.role}
									onClick={easterEgg ? () => router.push(`/team/${item.id}`) : undefined}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="_section">
				<div className="_titles">
					<h2 className="_title">Leading Team</h2>
					<p className="_subtitle">Meet our team leaders</p>
				</div>
				<div className="_cards-wrapper">
					<div className="_cards">
						{teamLeads.map((item) => {
							const easterEgg = getTeamEasterEgg(item.id);

							return (
								<ImageCard
									key={item.id}
									image={item.image}
									name={item.name}
									role={item.role}
									onClick={easterEgg ? () => router.push(`/team/${item.id}`) : undefined}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</TeamPageContainer>
	);
};

export default TeamPage;
