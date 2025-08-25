import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import {colors, mQuery} from "@/styles/vars";
import {LuChevronDown, LuChevronUp} from "react-icons/lu";

const AccordionContainer = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 12px;
	
	${mQuery.desktop} {
		display: none;
	}
`;

const AccordionHeader = styled.button<{ isOpen: boolean }>`
	background-color: ${({ isOpen }) => (isOpen ? colors.border : colors.background)};
    padding: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    transition: background-color 0.2s;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
	max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
	overflow: hidden;
	transition: max-height 0.3s ease;
	padding: ${({ isOpen }) => (isOpen ? '16px' : '0 16px')};
	background-color: ${colors.background};
`;

type AccordionProps = {
	title: string;
	children: ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<AccordionContainer>
			<AccordionHeader
				onClick={() => setIsOpen(!isOpen)}
				isOpen={isOpen}
				aria-expanded={isOpen}>
				{title}
				{isOpen ? <LuChevronUp /> : <LuChevronDown />}
			</AccordionHeader>
			<AccordionContent isOpen={isOpen}>{children}</AccordionContent>
		</AccordionContainer>
	);
};
