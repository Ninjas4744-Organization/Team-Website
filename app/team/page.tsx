/**
 * Page Component
 *
 * This component represents the main page for the Ninjas #4744 team. It displays
 * a hero section with the team’s picture and titles, followed by sections for Mentors
 * and Team Leads.
 *
 * Styled using Chakra UI, the component is responsive and leverages its design system
 * for consistent styling and spacing.
 *
 * Written by @DeveloperCron and ChatGPT
 */

"use client";

// Leads
import elhayPicture from "@/public/assets/people/ElhayPicture2.png";
import tzufPicture from "@/public/assets/people/TzufPicture3.png";
import eitanPicture from "@/public/assets/people/EitanPicture.png";
import yaroslavaPicture from "@/public/assets/people/YaroslavaPicture.png";
// Mentors
import kfirPicture from "@/public/assets/people/KfirPicture.png";
import shaiPicture from "@/public/assets/people/ShaiPicture.png";
import talPicture from "@/public/assets/people/TalPicture2.png";
import blankPicture from "@/public/assets/people/blankPicture.png";
import ImageCard from "@/components/home/ImageCard";
import styled from "styled-components";
import {Hero} from "@/components/ui/Hero";
import {colors, fontSizes, mQuery} from "@/styles/vars";

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
		
		> ._cards {
			display: flex;
			flex-direction: row;
			gap: 1.25rem;
			
			${mQuery.mobile} {
				flex-direction: column;
				gap: 0.75rem;
				margin-top: 1.25rem;
				width: 100%;
			}
		}
	}
`;
const TeamPage = () => {
	// Define team leads and mentors data
	const teamLeads = [
		{ name: "Yaroslava Avdeev", role: "Mechanics", image: yaroslavaPicture },
		{ name: "Tzuf Ben Yehuda", role: "Captain", image: tzufPicture },
		{ name: "Eitan Grimblat", role: "Software", image: eitanPicture },
		{ name: "Elhay Journo", role: "Electronics", image: elhayPicture },
	];

	const mentors = [
		{ name: "Ido Shoshani", role: "Strategy", image: blankPicture },
		{ name: "Guy Pacha", role: "Strategy", image: blankPicture },
		{ name: "Shai Leib", role: "Lead Mentor & Mechanics", image: shaiPicture },
		{ name: "Tal Ben Amram", role: "Software", image: talPicture },
		{ name: "Kfir Nevo", role: "Software & Community", image: kfirPicture },
		{ name: "Jacob Nazarov", role: "CAD", image: blankPicture },
	];

	return (
		<TeamPageContainer>
			<Hero
				images={['/assets/teamPicture2026.webp']}
				title="Ninjas #4744"
				subtitle="Team" />
			<div className="_section">
				<div className="_titles">
					<h2 className="_title">Mentors</h2>
					<p className="_subtitle">Meet our mentors</p>
				</div>
				<div className="_cards">
					{mentors.map((item, index) => (
						<ImageCard key={index} image={item.image} name={item.name} role={item.role} />
					))}
				</div>
			</div>
			<div className="_section">
				<div className="_titles">
					<h2 className="_title">Leading Team</h2>
					<p className="_subtitle">Meet our team leaders</p>
				</div>
				<div className="_cards">
					{teamLeads.map((item, index) => (
						<ImageCard key={index} image={item.image} name={item.name} role={item.role} />
					))}
				</div>
			</div>
		</TeamPageContainer>
	);
};

export default TeamPage;
