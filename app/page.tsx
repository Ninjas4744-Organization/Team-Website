"use client";

import Image from "next/image";
import React from "react";

import Carousel from "@/components/ui/Carousel";
import CarouselCard from "@/components/ui/CarouselCard";
import Sponsors from "@/constants/Sponsors";
import {TeamHighlights} from "@/components/home/TeamHighlights";
import styled from "styled-components";
import {colors, fontSizes} from "@/styles/vars";
import {Hero} from "@/components/ui/Hero";
import {Accordion} from "@/components/ui/Accordion";

const HomeWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const SponsorsWrapper = styled.div`
	width: 100%;
	margin: 2.5rem 0 1.25rem;
	justify-content: center;
	text-align: center;
	
	> ._title {
		font-size: ${fontSizes.super};
		font-weight: 600;
		color: ${colors.text.primary};
	}
	
	> ._subtitle {
		font-size: ${fontSizes.large};
		color: ${colors.text.secondary};
		margin-top: 0.5rem;
	}
`;

const Sponsor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
	flex-direction: column;
	
	> .image {
		width: 80%;
		height: auto;
		object-fit: cover;
	}
	
	> .description {
        font-size: 1rem;
        text-align: center;
	}
`;

const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<Hero
				images={[
					"/assets/robots/Peck.webp",
					"/assets/teamPicture.webp",
					"/assets/robots/Willson.webp"
				]}
				title="Ninjas #4744"
				subtitle="We're the robotics team of Amal Hadera high school since 2013.<br/>
					We're a passionate robotics team competing in FIRST. With creativity, innovation, and teamwork, we build more than robots – we build future leaders." />
			<TeamHighlights/>
			<SponsorsWrapper>
				<h2 className="_title">Our supporters</h2>
				<p className="_subtitle">Key companies who provide us everything we need</p>
				<Carousel>
					{Sponsors.map((item, index) => (
						<CarouselCard key={index} cardDescription={item.description} cardImage={item.logo} cardTitle={item.title}/>
					))}
				</Carousel>
				{Sponsors.map((item, index) => <Accordion key={"sponsor-" + index} title={item.title}>
					<Sponsor>
						<Image alt={`${item.title}`} src={item.logo} className="image"/>
						<p className="description">{item.description}</p>
					</Sponsor>
				</Accordion>)}
			</SponsorsWrapper>
		</HomeWrapper>
	);
};

export default Home;
