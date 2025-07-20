"use client";

import styled from "styled-components";
import Link from "next/link";
import {usePathname} from "next/navigation";
import classNames from "classnames";
import {colors} from "@/styles/vars";
import {allToValLabelPairs, ValLabelPairInput} from "@/lib/utils";

type Props = {
	data: ValLabelPairInput;
	baseRoute: string;
};

const TabsContainer = styled.div`
	display: flex;
	flex-direction: row;
	
	> ._tab {
		flex: 1;
		margin-left: 0;
		padding: 10px;
		border-bottom: 2px solid ${colors.text.secondary};
		transition: all 0.5s;
		font-family: Lato, sans-serif;
		font-weight: 300;
		cursor: pointer;
		color: ${colors.text.secondary};
		justify-content: center;
		text-align: center;
		
		&._active {
			border-bottom: 2px solid ${colors.text.primary};
			color: ${colors.text.primary};
		}
	}
`;
export const Tabs: React.FC<Props> = ({data, baseRoute}) => {
	const pathname = usePathname();
	const isActive = (value: string) => pathname === `${baseRoute}/${value}`;
	const tabs = allToValLabelPairs(data).sort((a, b) => a.label.localeCompare(b.label));

	return <TabsContainer>
		{tabs.map((obj, index) => (
			<div key={index} className={classNames('_tab', {_active: isActive(obj.val as string)})}>
				<Link href={`${baseRoute}/${obj.val}`}>{obj.label}</Link>
			</div>
		))}
	</TabsContainer>;
};
