import styled from "styled-components";
import {colors, fontSizes} from "@/styles/vars";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const IconButtonContainer = styled.button`
	border-radius: 50%;
	padding: 0.5rem;
	box-sizing: border-box;
	display: inline-flex;
	border: 1px solid ${colors.border};
	cursor: pointer;
	background: transparent;
	color: ${colors.text.secondary};
	transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease, transform 180ms ease;
	font-size: ${fontSizes.large};

	&:hover {
		background: ${colors.accentSoft};
		border-color: ${colors.accent};
		color: ${colors.accentHover};
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(0);
		background: rgba(175, 199, 211, 0.26);
	}
`;
export const IconButton: React.FC<IconButtonProps> = ({children, ...props}) => {
	return (
		<IconButtonContainer {...props}>
			{children}
		</IconButtonContainer>
	);
};
