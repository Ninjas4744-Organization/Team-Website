"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { IconButton } from "@/components/ui/IconButton";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";
import { motion } from "motion/react";
import TBAIcon from "./TBAIcon";
import NinjasLogo from "@/public/assets/NinjasLogo.svg";
import siteConfig from "@/config/siteConfig";
import styled from "styled-components";
import {SponsorPopover} from "@/components/ui-new/SponsorPopover";
import {colors, mQuery} from "@/styles/vars";
import {Separator} from "@/components/ui/Separator";
import {NavLinks} from "@/components/NavLinks";

interface MenuToggleProps {
	onClick: () => void;
	isMenuOpen: boolean;
}

const NavbarMenuToggleStyle = styled.button`
	border: 1px solid ${colors.border};
	border-radius: 10px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	padding: 0.75rem;
	gap: 0.5rem;
	box-sizing: border-box;
	line-height: 1.25rem;

	${mQuery.desktop} {
		display: none;
	}
`;
const NavbarMenuToggle = ({ onClick, isMenuOpen }: MenuToggleProps) => {
	return (
		<NavbarMenuToggleStyle onClick={onClick}>
			{isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
		</NavbarMenuToggleStyle>
	);
};

const NavbarStyle = styled.div`
	max-width: 100%;
	height: 3.5rem;
	padding-inline: 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${colors.background};

	> ._logo {
		padding: 10px;
		display: flex;
		align-items: center;
		gap: 0.5rem;
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
	background-color: ${colors.background};
	border-radius: 0.375rem;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	z-index: 1000;
	left: 50%;
	top: 2rem;
	transform: translateX(-50%);

	${mQuery.desktop} {
		display: none;
	}

	> ._title {
		font-weight: bold;
		font-size: 1rem;
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
			padding: 0.5rem 0;
			border-radius: 0.375rem;
			transition: all;
			transition-timing-function: cubic-bezier(.4, 0, .2, 1);
			transition-duration: 150ms;
			cursor: pointer;
			font-weight: 500;

			&:hover {
				background-color: ${colors.border};
				color: ${colors.hover};
			}
		}
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
					<Image alt='NinjasLogo' height={40} width={40} src={NinjasLogo} />
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
					<SponsorPopover />
				</div>
			</div>


			{isMenuOpen && (
				<motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} style={{ zIndex: 9999, position: "relative" }}>
					<MobileMenuStyle>
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
						</div>
					</MobileMenuStyle>
				</motion.div>
			)}
		</NavbarStyle>
	);
};

export default AppNavbar;
