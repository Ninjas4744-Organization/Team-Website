"use client";

import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import {FaFacebookF, FaGithub, FaInstagram} from "react-icons/fa";

import TBAIcon from "./TBAIcon";

import NinjasLogo from "@/public/assets/NinjasLogo.svg";
import siteConfig from "@/config/siteConfig";
import {IconButton} from "@/components/ui/IconButton";
import styled from "styled-components";
import {colors, fontSizes} from "@/styles/vars";
import {Separator} from "@/components/ui/Separator";
import {NavLinks} from "@/components/NavLinks";

const FooterContainer = styled.div`
	position: sticky;
	z-index: 1;

	._container {
		max-width: 100%;
		padding: 1rem;
		justify-content: center;
		align-items: center;
		background-color: ${colors.background};
		display: flex;
		flex-direction: column;

		> ._nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			width: 100%;
		}

		> ._lower {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			width: 100%;
			
			> ._rights_text {
				text-align: center;
				margin: 0 auto;
				color: ${colors.text.secondary};
				font-size: ${fontSizes.small};
			}
			
			> ._socials {
				display: flex;
				gap: 0.5rem;
			}
		}
	}
`;

const AppFooter: React.FC = () => {
	return (
		<FooterContainer>
			<div className="_container">
				<div className="_nav">
					<Image alt='Ninjas Logo' height={40} src={NinjasLogo} width={40}/>
					<NavLinks/>
				</div>
				<Separator/>
				<div className="_lower">
					<div className="_rights_text">
						All rights reserved © Ninjas #4744 since 2013
					</div>
					<div className="_socials">
						<NextLink href={siteConfig.siteLinks.github}>
							<IconButton aria-label='GitHub'>
								<FaGithub/>
							</IconButton>
						</NextLink>
						<NextLink href={siteConfig.siteLinks.instagram}>
							<IconButton aria-label='Instagram'>
								<FaInstagram/>
							</IconButton>
						</NextLink>
						<NextLink href={siteConfig.siteLinks.facebook}>
							<IconButton aria-label='Facebook'>
								<FaFacebookF/>
							</IconButton>
						</NextLink>
						<NextLink href={siteConfig.siteLinks.tba}>
							<IconButton aria-label='TBA'>
								<TBAIcon/>
							</IconButton>
						</NextLink>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
};

export default AppFooter;
