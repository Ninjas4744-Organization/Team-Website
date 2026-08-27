import styled from "styled-components";
import {colors, fontSizes, mQuery} from "@/styles/vars";
import {IoBuildOutline, IoPersonOutline, IoTrophyOutline} from "react-icons/io5";

type HighlightCardProps = {
	title: string;
	description: string;
};

type IconBoxProps = {
	title: string;
	children: React.ReactNode;
};

type HighlightItem = HighlightCardProps & {
	icon: React.ReactNode;
};

const TeamHighlightsContainer = styled.div`
	position: relative;
	background: ${colors.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 3.5rem 2rem;
	width: 100vw;

	> * {
		width: 100%;
	}

	> ._highlights {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		justify-content: center;

		${mQuery.desktop} {
			flex-direction: row;
		}

		> ._highlight {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.9rem;
			width: 100%;
		}
	}
`;
export const TeamHighlights: React.FC = () => {
	const highlights: HighlightItem[] = [
		{
			title: "Members",
			description: "As of 2025, we have 25 members from middle school to senior year. These students are tasked with a variety of challenges that help them in the future, from raising budgets for our team to programming the robot from scratch.",
			icon: <IoPersonOutline size={30}/>,
		},
		{
			title: "Competitions",
			description: "Throughout our journey, we have won multiple competitions such as the off-season 2022. Our most significant win was in 2016 when we won first place at the competition held by FRC in Israel, allowing us to compete against teams around the world at the international competition.",
			icon: <IoTrophyOutline size={30}/>,
		},
		{
			title: "Establishment",
			description: "Da Vinci 4744 was established in 2013 as Ninjas at the Amal sciences and arts school. We started as a small team and throughout the years we grew, now consisting of 20 young students from middle to high school.",
			icon: <IoBuildOutline size={30}/>,
		},
	];

	return (
		<TeamHighlightsContainer>
			<div className="_highlights">
				{highlights.map((highlight, index) => (
					<div key={index} className="_highlight">
						<HighlightCard description={highlight.description} title={highlight.title}/>
						<IconBox title={highlight.title}>{highlight.icon}</IconBox>
					</div>
				))}
			</div>
		</TeamHighlightsContainer>
	);
};

const IconBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> ._icon {
		border-radius: 50%;
		border: 1px solid ${colors.accent};
		background: ${colors.accentSoft};
		box-shadow: 0 0.75rem 1.5rem rgba(22, 38, 49, 0.16);
		height: 5rem;
		width: 5rem;
		align-content: center;
		text-align: center;

		* {
			margin: auto;
		}
	}

	> ._title {
		color: ${colors.accentHover};
		font-size: ${fontSizes.small};
		font-weight: 700;
		letter-spacing: 0.04em;
		margin-top: 0.25rem;
		text-transform: uppercase;
	}
`;
const IconBox: React.FC<IconBoxProps> = ({title, children}) => {
	return (
		<IconBoxContainer>
			<div className="_icon">
				{children}
			</div>
			<p className="_title">
				{title}
			</p>
		</IconBoxContainer>
	);
};

const HighlightCardContainer = styled.div`
	border-radius: 18px;
	border: 1px solid ${colors.border};
	box-shadow: 0 1.25rem 2.5rem rgba(22, 38, 49, 0.16);
	background: ${colors.surface};
	display: flex;
	flex-direction: column;
	min-height: 200px;
	max-width: 24rem;
	padding: 1.35rem;
	text-align: center;
	transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;

	&:hover {
		border-color: ${colors.borderStrong};
		box-shadow: 0 1.5rem 3rem rgba(22, 38, 49, 0.24);
		transform: translateY(-4px);
	}

	> ._heading {
		font-weight: bold;
		font-size: ${fontSizes.large};
		color: ${colors.text.primary};
		margin-bottom: 0.75rem;
	}

	> ._desc {
		margin: 0;
		font-size: ${fontSizes.small};
		color: ${colors.text.secondary};
		line-height: 1.6;
	}
`;
const HighlightCard: React.FC<HighlightCardProps> = ({title, description}) => {
	return (
		<HighlightCardContainer>
			<h2 className="_heading">
				{title}
			</h2>
			<p className="_desc">
				{description}
			</p>
		</HighlightCardContainer>
	);
};
