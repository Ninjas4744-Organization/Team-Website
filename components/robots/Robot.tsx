'use client';

import styled from 'styled-components';
import {colors} from "@/styles/vars";
import type {RobotItem} from "@/lib/types/Robot";
import {useRouter} from "next/navigation";

const RobotWrapper = styled.li`
	display: flex;
	gap: 1rem;
	align-items: flex-start;
	border: 1px solid ${colors.border};
	border-radius: 16px;
	padding: 1rem;
	background: ${colors.background};
	cursor: pointer;

	@media (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

const RobotImage = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 8px;
	object-fit: cover;
`;

const RobotInfo = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const RobotTitle = styled.div`
	font-weight: bold;
	margin-bottom: 0.3rem;
`;

const RobotYear = styled.div`
	color: ${colors.text.secondary};
`;

export default function RobotItem({id, name, label}: RobotItem) {
	const router = useRouter();

	return (
		<RobotWrapper onClick={() => router.push(`/robots/${id}`)}>
			<RobotImage
				src={`/assets/robots/${name}.webp`}
				alt={name}/>
			<RobotInfo>
				<RobotTitle>{name}</RobotTitle>
				<RobotYear>{label}</RobotYear>
			</RobotInfo>
		</RobotWrapper>
	);
}
