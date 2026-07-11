"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { IoClose, IoDownloadOutline } from "react-icons/io5";
import type { GalleryImage } from "@/lib/gallery";
import { colors, fontSizes, mQuery } from "@/styles/vars";

type GalleryLightboxProps = {
	image: GalleryImage | null;
	onClose: () => void;
};

function getDownloadFilename(src: string): string {
	return src.split("/").pop() ?? "gallery-image.webp";
}

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 2000;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	background: rgba(0, 0, 0, 0.88);
`;

const LightboxPanel = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1fr) 220px;
	gap: 1.5rem;
	width: min(1100px, 100%);
	max-height: calc(100vh - 3rem);

	${mQuery.mobile} {
		grid-template-columns: 1fr;
		max-height: calc(100vh - 2rem);
		overflow-y: auto;
	}
`;

const ImageStage = styled.div`
	position: relative;
	min-height: 280px;
	height: min(72vh, 720px);
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid ${colors.border};
	background: ${colors.accent_background};

	> img {
		object-fit: contain;
	}
`;

const SidePanel = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1.25rem;
	border: 1px solid ${colors.border};
	border-radius: 16px;
	background: ${colors.background};
`;

const Caption = styled.p`
	font-size: ${fontSizes.medium};
	line-height: 1.6;
	color: ${colors.text.secondary};
	flex: 1;
`;

const YearLabel = styled.span`
	font-size: ${fontSizes.small};
	font-weight: 600;
	color: ${colors.accent};
	text-transform: uppercase;
	letter-spacing: 0.05em;
`;

const ActionButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.75rem 1rem;
	border-radius: 10px;
	border: 1px solid ${colors.border};
	background: ${colors.accent_background};
	color: ${colors.text.primary};
	font-size: ${fontSizes.medium};
	font-weight: 600;
	text-decoration: none;
	transition: background 0.2s ease, border-color 0.2s ease;

	&:hover {
		background: rgba(59, 130, 246, 0.12);
		border-color: rgba(59, 130, 246, 0.45);
	}
`;

const CloseButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.75rem 1rem;
	border-radius: 10px;
	border: 1px solid ${colors.border};
	background: transparent;
	color: ${colors.text.secondary};
	font-size: ${fontSizes.medium};
	font-weight: 600;
	cursor: pointer;

	&:hover {
		color: ${colors.text.primary};
		background: ${colors.accent_background};
	}
`;

export function GalleryLightbox({ image, onClose }: GalleryLightboxProps) {
	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		if (!image) {
			return;
		}

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [image, handleKeyDown]);

	if (!image) {
		return null;
	}

	const filename = getDownloadFilename(image.src);

	return (
		<Overlay onClick={onClose} role="dialog" aria-modal="true" aria-label={image.alt}>
			<LightboxPanel onClick={(event) => event.stopPropagation()}>
				<ImageStage>
					<Image src={image.src} alt={image.alt} fill sizes="90vw" priority />
				</ImageStage>

				<SidePanel>
					<YearLabel>{image.year}</YearLabel>
					<Caption>{image.alt}</Caption>
					<ActionButton href={image.src} download={filename}>
						<IoDownloadOutline size={18} />
						Download
					</ActionButton>
					<CloseButton type="button" onClick={onClose}>
						<IoClose size={18} />
						Close
					</CloseButton>
				</SidePanel>
			</LightboxPanel>
		</Overlay>
	);
}
