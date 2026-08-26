'use client';

import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {FaHeart} from "react-icons/fa";
import {Button} from "@/components/ui/Button";
import {Separator} from "@/components/ui/Separator";
import {colors, fontSizes} from "@/styles/vars";

const PopoverButtonContainer = styled.div`
	position: relative;
	display: inline-block;

	.popover-trigger {
		border: 1px solid ${colors.border};
		border-radius: 10px;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		padding: 0.75rem;
		gap: 0.5rem;
		box-sizing: border-box;
		line-height: 1.25rem;

		&:hover, &._trigger-active {
			background: ${colors.accentSoft};
			border-color: ${colors.accent};
		}
	}

	.popover-content {
		position: absolute;
		top: 100%;
		left: -100%;
		transform: translateX(-50%);
		margin-top: 10px;
		background: ${colors.surface};
		border: 1px solid ${colors.border};
		border-radius: 14px;
		box-shadow: 0 1.25rem 2.5rem ${colors.shadow};
		padding: 15px;
		z-index: 1000;
		white-space: nowrap;

		> ._title {
			font-weight: bold;
			font-size: ${fontSizes.medium};
			line-height: 1.5rem;
			color: ${colors.accentHover};
			padding: 0;
			margin-bottom: 10px;
			text-align: start;
			letter-spacing: 0.05em;
		}

		> ._content {
			margin-block: 1rem;
		}
	}
`;

export const SponsorPopover = () => {
	const [isVisible, setIsVisible] = useState(false);
	const popoverRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target;
			if (!(target instanceof Node)) {
				return;
			}

			if (
				popoverRef.current &&
				!popoverRef.current.contains(target) &&
				triggerRef.current &&
				!triggerRef.current.contains(target)
			) {
				setIsVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<PopoverButtonContainer>
			<Button
				ref={triggerRef}
				onClick={toggleVisibility}
				className={classNames('popover-trigger', { '_active': isVisible })}
				aria-haspopup="true"
				aria-expanded={isVisible}
				aria-controls="popover-content">
				<FaHeart color={colors.accent} />
				Sponsor
			</Button>
			{isVisible && (
				<div
					id="popover-content"
					ref={popoverRef}
					className="popover-content"
					role="dialog"
					aria-modal="true"
				>
					<div className="_title">SPONSOR US!</div>
					<Separator />
					<p className="_content">
						Thanks for wanting to support us! Email: ninjas4744@gmail.com
					</p>
				</div>
			)}
		</PopoverButtonContainer>
	);
};
