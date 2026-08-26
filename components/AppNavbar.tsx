"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { IconButton } from "@/components/ui/IconButton";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";
import { motion } from "motion/react";
import TBAIcon from "./TBAIcon";
import DaVinciLogo from "@/public/assets/DaVinciLogo.svg";
import siteConfig from "@/config/siteConfig";
import styled from "styled-components";
import {colors, fontSizes, mQuery} from "@/styles/vars";
import {Separator} from "@/components/ui/Separator";
import {NavLinks} from "@/components/NavLinks";
import { FaHeart } from "react-icons/fa";

interface MenuToggleProps {
	onClick: () => void;
	isMenuOpen: boolean;
}

const NavbarMenuToggleStyle = styled.button`
	border: 1px solid ${colors.border};
	border-radius: 12px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.65rem;
	gap: 0.5rem;
	box-sizing: border-box;
	line-height: 1.25rem;
	background: ${colors.surfaceRaised};
	color: ${colors.text.primary};
	transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;

	&:hover {
		background: ${colors.accentSoft};
		border-color: ${colors.accent};
		transform: translateY(-1px);
	}

	${mQuery.desktop} {
		display: none;
	}
`;
const NavbarMenuToggle = ({ onClick, isMenuOpen }: MenuToggleProps) => {
	return (
		<NavbarMenuToggleStyle
			onClick={onClick}
			aria-controls="mobile-navigation"
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
		>
			{isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
		</NavbarMenuToggleStyle>
	);
};

const NavbarStyle = styled.div`
	position: sticky;
	top: 0;
	z-index: 50;
	max-width: 100%;
	height: 4.25rem;
	padding-inline: 1.25rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid ${colors.border};
	background: rgba(49, 75, 93, 0.88);
	backdrop-filter: blur(18px);
	box-shadow: 0 0.6rem 1.75rem rgba(22, 38, 49, 0.16);

	${mQuery.mobile} {
		height: 3.75rem;
		padding-inline: 0.75rem;
	}

	> ._logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		> a {
			display: grid;
			place-items: center;
			width: 2.75rem;
			height: 2.75rem;
			border-radius: 10px;
			transition: background 180ms ease, transform 180ms ease;

			&:hover {
				background: ${colors.accentSoft};
				transform: translateY(-1px);
			}
		}
	}

	> ._desktop_view {
		display: flex;
		flex-direction: row;
		flex-grow: 1;

		${mQuery.mobile} {
			display: none;
		}

		> ._nav {
			justify-content: center;
			align-content: center;
			flex-grow: 1;
		}

		._buttons_group {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}
`;

const MobileMenuStyle = styled.div`
	position: absolute;
	pointer-events: auto;
	background: ${colors.surface};
	border: 1px solid ${colors.border};
	border-radius: 14px;
	box-shadow: 0 1.25rem 2.5rem ${colors.shadow};
	padding: 1rem;
	z-index: 1000;
	left: 0.75rem;
	right: 0.75rem;
	top: 4.25rem;

	${mQuery.desktop} {
		display: none;
	}

	> ._title {
		font-weight: bold;
		font-size: ${fontSizes.medium};
		line-height: 1.5rem;
		padding: 0;
		margin-bottom: 10px;
		text-align: start;
	}

	> ._links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		> ._link {
			text-decoration: none;
			padding: 0.7rem 0.75rem;
			border-radius: 0.375rem;
			transition: background-color 180ms ease, color 180ms ease;
			cursor: pointer;
			font-weight: 500;

			&:hover {
				background-color: ${colors.accentSoft};
				color: ${colors.accentHover};
			}
		}
	}
`;

const SponsorLink = styled(NextLink)`
	border: 1px solid ${colors.border};
	border-radius: 12px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	padding: 0.62rem 0.8rem;
	gap: 0.5rem;
	box-sizing: border-box;
	line-height: 1.25rem;
	color: ${colors.text.primary};
	text-decoration: none;
	background: ${colors.accentSoft};
	transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;

	&:hover {
		background: rgba(175, 199, 211, 0.28);
		border-color: ${colors.accent};
		transform: translateY(-1px);
	}
`;

const AppNavbar: React.FC = () => {
	const [isMenuOpen, setMenuIsOpen] = useState<boolean>(false);

	const handleMenuToggle = () => {
		setMenuIsOpen((prev) => !prev);
	};

	return (
		<NavbarStyle>
			<div className="_logo">
				<NextLink href={"/"}>
					<Image alt="Da Vinci 4744 logo" height={40} width={40} src={DaVinciLogo} />
				</NextLink>
				<NavbarMenuToggle isMenuOpen={isMenuOpen} onClick={handleMenuToggle} />
			</div>
			<div className="_desktop_view">
				<div className="_nav">
					<NavLinks />
				</div>
				<div className="_buttons_group">
					<NextLink href={siteConfig.siteLinks.github}>
						<IconButton aria-label={"GitHub"}>
							<FaGithub />
						</IconButton>
					</NextLink>
					<NextLink href={siteConfig.siteLinks.instagram}>
						<IconButton aria-label={"Instagram"}>
							<FaInstagram />
						</IconButton>
					</NextLink>
					<NextLink href={siteConfig.siteLinks.facebook}>
						<IconButton aria-label={"Facebook"}>
							<FaFacebookF />
						</IconButton>
					</NextLink>
					<NextLink href={siteConfig.siteLinks.tba}>
						<IconButton aria-label={"TBA"}>
							<TBAIcon />
						</IconButton>
					</NextLink>
					<SponsorLink href={siteConfig.siteLinks.sponsors}>
						<FaHeart color={colors.accent} />
						Sponsor
					</SponsorLink>
				</div>
			</div>


			{isMenuOpen && (
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -16 }}
					style={{ zIndex: 9999, position: "fixed", inset: 0, pointerEvents: "none" }}
				>
					<MobileMenuStyle id="mobile-navigation">
						<div className="_title">
							Navigation
						</div>
						<Separator />
						<div className="_links">
							{siteConfig.navLinks.map((item, index) => (
								<NextLink key={index} className="_link" href={item.href} onClick={() => setMenuIsOpen(false)}>
									{item.title}
								</NextLink>
							))}
							<NextLink className="_link" href={siteConfig.siteLinks.sponsors} onClick={() => setMenuIsOpen(false)}>
								Sponsor
							</NextLink>
						</div>
					</MobileMenuStyle>
				</motion.div>
			)}
		</NavbarStyle>
	);
};

export default AppNavbar;
