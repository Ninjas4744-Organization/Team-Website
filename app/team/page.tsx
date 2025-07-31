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
import liorPicture from "@/public/assets/people/LiorPicture.png";
import tzufPicture from "@/public/assets/people/TzufPicture.png";
import eitanPicture from "@/public/assets/people/EitanPicture.png";
import idoPicture from "@/public/assets/people/IdoPicture.png";
import ronPicture from "@/public/assets/people/RonPicture.png";
// Mentors
import etaiPicture from "@/public/assets/people/EtaiPicture.png";
import kfirPicture from "@/public/assets/people/KfirPicture.png";
import pachaPicture from "@/public/assets/people/PachaPicture.png";
import shaiPicture from "@/public/assets/people/ShaiPicture.png";
import talPicture from "@/public/assets/people/TalPicture.png";
import ImageCard from "@/components/ImageCard";
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
		{ name: "Lior", role: "C&M", image: liorPicture },
		{ name: "Tzuf", role: "Captain", image: tzufPicture },
		{ name: "Eitan", role: "Software", image: eitanPicture },
		{ name: "Ido", role: "Mechanics", image: idoPicture },
		{ name: "Ron", role: "Control", image: ronPicture },
	];

	const mentors = [
		{ name: "Shai", role: "Mechanics mentor", image: shaiPicture },
		{ name: "Pacha", role: "CAD mentor", image: pachaPicture },
		{ name: "Kfir", role: "Software mentor", image: kfirPicture },
		{ name: "Etai", role: "Lead mentor", image: etaiPicture },
		{ name: "Tal", role: "Control mentor", image: talPicture },
	];

	return (
		<TeamPageContainer>
			<Hero
				images={['/assets/teamPicture.webp']}
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
