"use client";

import Image from "next/image";
import styled from "styled-components";
import Page from "@/components/layout/Page";
import PageTitle from "@/components/layout/PageTitle";
import Carousel from "@/components/ui/Carousel";
import CarouselCard from "@/components/ui/CarouselCard";
import { Accordion } from "@/components/ui/Accordion";
import Sponsors from "@/constants/Sponsors";
import { colors, fontSizes } from "@/styles/vars";

const Description = styled.p`
	margin-bottom: 2rem;
	color: ${colors.text.secondary};
	font-size: ${fontSizes.large};
	line-height: 1.6;
`;

const SponsorCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	> .image {
		width: 80%;
		height: auto;
		object-fit: contain;
	}

	> .description {
		font-size: ${fontSizes.medium};
		text-align: center;
		color: ${colors.text.secondary};
		line-height: 1.6;
	}
`;

const SponsorUs = styled.section`
	margin-top: 2.5rem;
	padding: 1.5rem;
	border: 1px solid ${colors.border};
	border-radius: 18px;
	background: ${colors.surface};
	box-shadow: 0 1rem 2.25rem rgba(22, 38, 49, 0.14);
	text-align: center;

	> h2 {
		font-size: ${fontSizes.xlarge};
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: ${colors.text.primary};
	}

	> p {
		color: ${colors.text.secondary};
		font-size: ${fontSizes.medium};
		line-height: 1.6;
	}

	> a {
		color: ${colors.accentHover};
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 0.2em;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export default function SponsorsPage() {
	return (
		<Page>
			<PageTitle>Our supporters</PageTitle>
			<Description>
				Key partners who help us build, compete, and grow as a team.
			</Description>

			<Carousel>
				{Sponsors.map((item, index) => (
					<CarouselCard
						key={index}
						cardDescription={item.description}
						cardImage={item.logo}
						cardTitle={item.title}
					/>
				))}
			</Carousel>

			{Sponsors.map((item, index) => (
				<Accordion key={`sponsor-${index}`} title={item.title}>
					<SponsorCard>
						<Image alt={item.title} src={item.logo} className="image" />
						<p className="description">{item.description}</p>
					</SponsorCard>
				</Accordion>
			))}

			<SponsorUs>
				<h2>Sponsor us</h2>
				<p>
					Thanks for wanting to support Da Vinci 4744. Reach out at{" "}
					<a href="mailto:ninjas4744@gmail.com">ninjas4744@gmail.com</a>.
				</p>
			</SponsorUs>
		</Page>
	);
}
