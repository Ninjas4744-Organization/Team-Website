"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { IconButton } from "@/components/ui-new/IconButton";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";
import { motion } from "motion/react";

import TBAIcon from "./TBAIcon";

import NinjasLogo from "@/public/assets/NinjasLogo.svg";
import siteConfig from "@/config/siteConfig";
import styled from "styled-components";
import {SponsorPopover} from "@/components/ui-new/SponsorPopover";

interface MenuToggleProps {
	onClick: () => void;
	isMenuOpen: boolean;
}

const NavbarMenuToggleStyle = styled.button`
    border: 1px solid #27272b;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0.75rem;
    gap: 0.5rem;
    box-sizing: border-box;
    line-height: 1.25rem;
	
	@media screen and (min-width: 1024px) {
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
	background-color: #18181b;
	
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
		
		@media screen and (max-width: 1024px) {
			display: none;
        }
		
        > ._nav {
            justify-content: center;
            align-content: center;
            flex-grow: 1;

            ._links {
                margin: auto 0;
                justify-content: center;

                > ._link {
                    font-weight: 500;
                    transition: all;
                    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                    transition-duration: 150ms;

                    &:hover {
                        color: #3b82f6;
                    }
                }
            }
        }

        ._buttons_group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        ._sponsor_button {
            border-radius: 10px;
            padding: 0.75rem;
            box-sizing: border-box;
            display: inline-flex;
            border-width: 1px;
            border-color: transparent;
            cursor: pointer;
            appearance: none;
            justify-content: center;
            outline: 0;
            line-height: 1.25rem;
        }
    }
`;

const MobileMenuStyle = styled.div`
	position: absolute;
	background-color: #18181b;
	border-radius: 0.375rem;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	z-index: 1000;
	left: 50%;
	top: 2rem;
	transform: translateX(-50%);
	
	@media screen and (min-width: 1024px) {
		display: none;
	}
	
	> ._title {
		font-weight: bold;
		font-size: 1rem;
		line-height: 1.5rem;
		color: #ffffff;
		padding: 0;
		margin-bottom: 10px;
		text-align: start;
    }
	
	> ._separator {
		height: 1px;
		background-color: #444444;
		margin: 10px 0;
		border: none;
		opacity: 0.5;
		width: 100%;
		display: block;
    }
	
	> ._links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		> ._link {
			color: #ffffff;
			text-decoration: none;
			padding: 0.5rem 0;
			border-radius: 0.375rem;
            transition: all;
            transition-timing-function: cubic-bezier(.4, 0, .2, 1);
            transition-duration: 150ms;
			cursor: pointer;
            font-weight: 500;

			&:hover {
				background-color: #27272b;
				color: #3b82f6;
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
					<div className="_links _buttons_group">
						{siteConfig.navLinks.map((item, index) => (
							<NextLink href={item.href} className="_link" key={index}>
								{item.title}
							</NextLink>
						))}
					</div>
				</div>
				<div className="_buttons_group">
					<NextLink href={siteConfig.siteLinks.github}>
						<IconButton aria-label={"GitHub"} size={"md"} variant={"ghost"}>
							<FaGithub />
						</IconButton>
					</NextLink>
					<NextLink href={siteConfig.siteLinks.instagram}>
						<IconButton aria-label={"Instagram"} size={"md"} variant={"ghost"}>
							<FaInstagram />
						</IconButton>
					</NextLink>
					<NextLink href={siteConfig.siteLinks.facebook}>
						<IconButton aria-label={"Facebook"} size={"md"} variant={"ghost"}>
							<FaFacebookF />
						</IconButton>
					</NextLink>
					<NextLink href={siteConfig.siteLinks.tba}>
						<IconButton aria-label={"TBA"} size={"md"} variant={"ghost"}>
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
						<div className="_separator" />
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
