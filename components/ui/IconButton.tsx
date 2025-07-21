import styled from "styled-components";
import {fontSizes} from "@/styles/vars";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const IconButtonContainer = styled.button`
	border-radius: 50%;
	padding: 0.5rem;
	box-sizing: border-box;
	display: inline-flex;
	border: 1px solid transparent;
	cursor: pointer;
	background-color: transparent;
	transition: background-color 0.2s;
	font-size: ${fontSizes.large};

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	&:active {
		background-color: rgba(0, 0, 0, 0.2);
	}
`;
export const IconButton: React.FC<IconButtonProps> = ({children, ...props}) => {
	return (
		<IconButtonContainer {...props}>
			{children}
		</IconButtonContainer>
	);
};
