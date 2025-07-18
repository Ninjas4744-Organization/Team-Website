'use client';

import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {FaHeart} from "react-icons/fa";

const PopoverButtonContainer = styled.div`
    position: relative;
    display: inline-block;

    .popover-trigger {
        border: 1px solid #27272b;
		border-radius: 10px;
        cursor: pointer;
		display: inline-flex;
		align-items: center;
		padding: 0.75rem;
		gap: 0.5rem;
		box-sizing: border-box;
		line-height: 1.25rem;
		
		&:hover, &._trigger-active {
			background-color: #27272b;
        }
    }

    .popover-content {
        position: absolute;
        top: 100%;
        left: -100%;
        transform: translateX(-50%);
        margin-top: 10px;
        background-color: #111111;
        border-radius: 0.375rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 15px;
        z-index: 1000;
        white-space: nowrap;
		
		> ._title {
			font-weight: bold;
			font-size: 1rem;
			line-height: 1.5rem;
			color: #ffffff;
			padding: 0;
			margin-bottom: 10px;
			text-align: start;
			text-transform: uppercase;
			letter-spacing: 0.05em;
        }
		
		> ._separator {
			height: 1px;
			background-color: #444444;
			margin: 10px 0;
			border: none;
			opacity: 0.5;
			width: 100%;
			display: block;
			box-sizing: border-box;
			border-radius: 0.25rem;
			transition: background-color 0.3s ease;
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
		const handleClickOutside = (event: any) => {
			if (
				popoverRef.current &&
				!popoverRef.current.contains(event.target) &&
				!triggerRef.current!.contains(event.target)
			) {
				setIsVisible(false); // Close the popover if clicked outside
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<PopoverButtonContainer>
			<button
				ref={triggerRef}
				onClick={toggleVisibility}
				className={classNames('popover-trigger', { '_trigger-active': isVisible })}
				aria-haspopup="true"
				aria-expanded={isVisible}
				aria-controls="popover-content">
				<FaHeart color="#dc2626" />
				Sponsor
			</button>
			{isVisible && (
				<div
					id="popover-content"
					ref={popoverRef}
					className="popover-content"
					role="dialog"
					aria-modal="true"
				>
					<div className="_title">Sponsor us!</div>
					<div className="_separator"/>
					<p className="_content">
						Thanks for wanting to support us! Email: ninjas4744@gmail.com
					</p>
				</div>
			)}
		</PopoverButtonContainer>
	);
};
