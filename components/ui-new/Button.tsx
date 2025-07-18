import styled from "styled-components";
import type {ButtonHTMLAttributes, FC} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const ButtonStyle = styled.button`
	border-radius: 10px;
	padding: 0.75rem;
	box-sizing: border-box;
	display: inline-flex;
	border: 1px solid transparent;
	cursor: pointer;
`;
export const Button: FC<ButtonProps> = ({children, ...buttonProps}) => {
	return <ButtonStyle {...buttonProps}>
		{children}
	</ButtonStyle>;
};