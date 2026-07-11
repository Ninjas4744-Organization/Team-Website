"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { colors, fontSizes, mQuery } from "@/styles/vars";
import { allToValLabelPairs, ValLabelPairInput } from "@/lib/utils";

type Props = {
	data: ValLabelPairInput;
	baseRoute: string;
};

const TabsWrapper = styled.nav`
	width: 100%;
	border-bottom: 1px solid ${colors.border};
	background: ${colors.background};
`;

const TabsContainer = styled.div`
	display: flex;
	overflow-x: auto;
	scrollbar-width: thin;
	scrollbar-color: ${colors.border} transparent;
	-webkit-overflow-scrolling: touch;
	padding: 0 1rem;

	&::-webkit-scrollbar {
		height: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${colors.border};
		border-radius: 999px;
	}

	${mQuery.mobile} {
		padding: 0 0.75rem;
		scroll-snap-type: x proximity;
	}

	@media screen and (min-width: 1200px) {
		max-width: 1480px;
		margin: 0 auto;
		padding: 0 1.5rem;
		overflow-x: visible;
	}
`;

const Tab = styled(Link)<{ $active: boolean }>`
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 48px;
	padding: 0.75rem 1rem;
	border-bottom: 2px solid
		${({ $active }) => ($active ? colors.text.primary : "transparent")};
	margin-bottom: -1px;
	transition: border-color 0.2s ease, color 0.2s ease;
	font-size: ${fontSizes.medium};
	font-weight: ${({ $active }) => ($active ? 600 : 400)};
	color: ${({ $active }) =>
		$active ? colors.text.primary : colors.text.secondary};
	text-align: center;
	white-space: nowrap;
	text-decoration: none;

	&:hover {
		color: ${colors.text.primary};
	}

	${mQuery.mobile} {
		padding: 0.75rem 0.85rem;
		font-size: ${fontSizes.small};
		scroll-snap-align: center;
	}

	@media screen and (min-width: 1200px) {
		flex: 1;
		min-width: 0;
		padding: 0.85rem 0.5rem;
	}
`;

export const Tabs: React.FC<Props> = ({ data, baseRoute }) => {
	const pathname = usePathname();
	const activeTabRef = useRef<HTMLAnchorElement>(null);
	const isActive = (value: string) => pathname === `${baseRoute}/${value}`;
	const tabs = allToValLabelPairs(data).sort((a, b) =>
		a.label.localeCompare(b.label),
	);

	useEffect(() => {
		activeTabRef.current?.scrollIntoView({
			inline: "center",
			block: "nearest",
			behavior: "smooth",
		});
	}, [pathname]);

	return (
		<TabsWrapper aria-label="Robot seasons">
			<TabsContainer>
				{tabs.map((obj) => {
					const val = obj.val as string;
					const active = isActive(val);

					return (
						<Tab
							key={val}
							ref={active ? activeTabRef : undefined}
							href={`${baseRoute}/${val}`}
							$active={active}
							aria-current={active ? "page" : undefined}
						>
							{obj.label}
						</Tab>
					);
				})}
			</TabsContainer>
		</TabsWrapper>
	);
};
