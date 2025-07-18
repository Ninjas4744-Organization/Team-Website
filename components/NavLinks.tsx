import styled from 'styled-components';
import siteConfig from "@/config/siteConfig";
import NextLink from "next/link";
import {colors} from "@/styles/vars";

const NavLinksContainer = styled.div`
	margin: 0 20px;
	justify-content: center;
	align-items: center;

	> ._link {
		font-weight: 500;
		transition: all;
		transition-timing-function: cubic-bezier(.4, 0, .2, 1);
		transition-duration: 150ms;
		margin-right: 20px;

		&:hover {
			color: ${colors.hover};
		}
	}
`;
export const NavLinks = () => {
	return (
		<NavLinksContainer>
			{siteConfig.navLinks.map((item, index) => (
				<NextLink href={item.href} className="_link" key={index}>
					{item.title}
				</NextLink>
			))}
		</NavLinksContainer>
	);
};
