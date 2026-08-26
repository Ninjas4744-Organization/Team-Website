"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Page from "@/components/layout/Page";
import PageTitle from "@/components/layout/PageTitle";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { groupGalleryByYear, type GalleryImage } from "@/lib/gallery";
import { colors, fontSizes, mQuery } from "@/styles/vars";
import gallery from "@/data/gallery.json";

const Description = styled.p`
	margin-bottom: 2rem;
	color: ${colors.text.secondary};
	font-size: ${fontSizes.large};
	line-height: 1.6;
`;

const YearSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.15rem;
	margin-bottom: 2.5rem;
`;

const YearHeading = styled.h2`
	font-size: ${fontSizes.xxlarge};
	font-weight: 600;
	color: ${colors.text.primary};
`;

const ImageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	gap: 1.25rem;

	${mQuery.mobile} {
		grid-template-columns: 1fr;
	}
`;

const ImageCard = styled.button`
	margin: 0;
	padding: 0;
	border: 1px solid ${colors.border};
	border-radius: 18px;
	overflow: hidden;
	background: ${colors.surface};
	cursor: pointer;
	text-align: left;
	box-shadow: 0 1rem 2.25rem rgba(22, 38, 49, 0.14);
	transition: border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;

	&:hover {
		border-color: ${colors.accent};
		box-shadow: 0 1.4rem 2.75rem rgba(22, 38, 49, 0.22);
		transform: translateY(-4px);

		img {
			transform: scale(1.04);
		}
	}
`;

const ImageFrame = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 4 / 3;
	background: ${colors.accent_background};

	> img {
		object-fit: cover;
		transition: transform 350ms ease;
	}
`;

const Caption = styled.span`
	display: block;
	padding: 0.9rem 1rem;
	font-size: ${fontSizes.small};
	color: ${colors.text.secondary};
	line-height: 1.4;
`;

export default function GalleryPage() {
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
	const sections = groupGalleryByYear(gallery as GalleryImage[]);

	return (
		<Page>
			<PageTitle>Gallery</PageTitle>
			<Description>
				Photos from our seasons, sorted by year.
			</Description>

			{sections.map(({ year, images }) => (
				<YearSection key={year}>
					<YearHeading>{year}</YearHeading>
					<ImageGrid>
						{images.map((image) => (
							<ImageCard
								key={`${year}-${image.src}`}
								type="button"
								onClick={() => setSelectedImage(image)}
								aria-label={`Open ${image.alt}`}
							>
								<ImageFrame>
									<Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
								</ImageFrame>
								<Caption>{image.alt}</Caption>
							</ImageCard>
						))}
					</ImageGrid>
				</YearSection>
			))}

			<GalleryLightbox
				image={selectedImage}
				onClose={() => setSelectedImage(null)}
			/>
		</Page>
	);
}
