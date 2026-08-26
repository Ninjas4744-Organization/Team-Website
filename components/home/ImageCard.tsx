import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import {colors} from "@/styles/vars";

export interface ImageCardProps extends HTMLAttributes<HTMLDivElement> {
	image: StaticImageData;
	name: string;
	role: string;
}

const ImageCardContainer = styled.div<{ $interactive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
	flex-direction: column;
	gap: 0.5rem;
	flex: 1;
	box-sizing: border-box;
	transition: transform 200ms ease;

	${({ $interactive }) => $interactive && `
		cursor: pointer;

		&:hover {
			transform: translateY(-0.4rem);
		}

		&:focus-visible {
			outline: 3px solid ${colors.accent};
			outline-offset: 0.5rem;
			border-radius: 0.5rem;
		}
	`}
	
	> ._image {
		background: ${colors.surface};
        height: 250px;
        width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
		border-radius: 14px;
		border: 1px solid ${colors.border};
		box-shadow: 0 1rem 2rem rgba(22, 38, 49, 0.18);
		overflow: hidden;

        img {
            max-height: 100%;
            width: auto;
            object-fit: contain;
            user-drag: none;
			border-radius: 14px;
			transition: transform 300ms ease;
		}

		${({ $interactive }) => $interactive && `
			&:hover img {
				transform: scale(1.035);
			}
		`}
	}
	
	> ._info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 12px;
		
		> ._name {
            color: ${colors.text.primary};
            font-size: 1.5rem;
			font-weight: 700;
            margin: 0;
		}
		
		> ._role {
			color: ${colors.text.secondary};
            font-size: 1rem;
            margin: 0;
		}
	}
`;

const ImageCard: React.FC<ImageCardProps> = ({ image, name, role, onClick, ...props }) => {
	const interactive = Boolean(onClick);

	return (
		<ImageCardContainer
			{...props}
			$interactive={interactive}
			onClick={onClick}
			role={interactive ? "button" : undefined}
			tabIndex={interactive ? 0 : undefined}
			onKeyDown={(event) => {
				if (interactive && (event.key === "Enter" || event.key === " ")) {
					event.preventDefault();
					event.currentTarget.click();
				}
			}}
		>
			<div className="_image">
				<Image alt={`${name}-${role}`} draggable={"false"} src={image} />
			</div>
			<div className="_info">
				<h3 className="_name">{name}</h3>
				<p className="_role">{role}</p>
			</div>
		</ImageCardContainer>
	);
};

export default ImageCard;
