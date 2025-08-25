import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import {colors} from "@/styles/vars";

export interface ImageCardProps extends HTMLAttributes<HTMLDivElement> {
	image: StaticImageData;
	name: string;
	role: string;
}

const ImageCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
	flex-direction: column;
	gap: 0.5rem;
	flex: 1;
	box-sizing: border-box;
	
	> ._image {
        background-color: ${colors.accent_background};
        height: 250px;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        border: 1px solid ${colors.border};

        img {
            max-height: 100%;
            width: auto;
            object-fit: contain;
            user-drag: none;
            border-radius: 0.5rem;
        }
	}
	
	> ._info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 12px;
		
		> ._name {
            color: ${colors.text.primary};
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0;
		}
		
		> ._role {
            color: ${colors.text.secondary};
            font-size: 1rem;
            margin: 0;
		}
	}
`;

const ImageCard: React.FC<ImageCardProps> = ({ image, name, role }) => {
	return (
		<ImageCardContainer>
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
