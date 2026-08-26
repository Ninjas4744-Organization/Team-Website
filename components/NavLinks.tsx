import styled from 'styled-components';
import siteConfig from "@/config/siteConfig";
import NextLink from "next/link";
import {colors} from "@/styles/vars";

const NavLinksContainer = styled.div`
	display: flex;
	gap: 0.25rem;
	margin: 0 1.5rem;
	justify-content: center;
	align-items: center;

	> ._link {
		padding: 0.5rem 0.7rem;
		border-radius: 8px;
		color: ${colors.text.secondary};
		font-weight: 600;
		transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;

		&:hover {
			background: ${colors.accentSoft};
			color: ${colors.accentHover};
			transform: translateY(-1px);
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
