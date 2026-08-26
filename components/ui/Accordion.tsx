import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import {colors, mQuery} from "@/styles/vars";
import {LuChevronDown, LuChevronUp} from "react-icons/lu";
import classNames from "classnames";

const AccordionContainer = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 14px;
	overflow: hidden;
	margin-bottom: 12px;
	
	${mQuery.desktop} {
		display: none;
	}
	
	> ._header {
		background-color: ${colors.surface};
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
		color: ${colors.text.primary};
		transition: background-color 180ms ease, color 180ms ease;
		
		&.isOpen {
			background-color: ${colors.accentSoft};
			color: ${colors.accentHover};
		}
	}
	
	> ._content {
        max-height: 0;
        overflow: hidden;
		transition: max-height 300ms ease, padding 300ms ease;
        padding: 0 16px;
		background-color: ${colors.surface};
		
		&.isOpen {
			max-height: 500px;
			padding: 16px;
		}
	}
`;

type AccordionProps = {
	title: string;
	children: ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<AccordionContainer>
			<button
				className={classNames('_header', {isOpen})}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}>
				{title}
				{isOpen ? <LuChevronUp /> : <LuChevronDown />}
			</button>
			<div className={classNames('_content', {isOpen})}>{children}</div>
		</AccordionContainer>
	);
};
