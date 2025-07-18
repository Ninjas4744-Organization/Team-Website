/**
 * Blue Alliance logo component for FIRST FRC.
 */

import React from "react";

interface TBAIconProps {
	/**
   * The height of the logo.
   */
	height?: number;

	/**
   * The width of the logo.
   */
	width?: number;
}

/**
 * Blue Alliance logo component for FIRST FRC.
 * Renders the Blue Alliance logo with customizable width and height.
 *
 * @param width - The width of the logo.
 * @param height - The height of the logo.
 */
const TBAIcon: React.FC<TBAIconProps> = ({ width = 20, height = 20 }) => {
	return (
		<>
			<svg className='tba-icon' height={height} viewBox='0 0 72 112' width={width} xmlns='http://www.w3.org/2000/svg'>
				<defs>
					<style>
						{`.cls-1 {
              fill: none;
              stroke: currentColor;
              stroke-miterlimit: 10;
              stroke-width: 6px;
            }
            .cls-2 {
              fill: currentColor;
              transition: fill 0.3s ease;
            }`}
					</style>
				</defs>
				<line className='cls-1' x1='11' x2='11' y1='20' y2='84' />
				<line className='cls-1' x1='61' x2='61' y1='20' y2='84' />
				<path className='cls-1' d='M39,92a25,25,0,0,0,25,25' transform='translate(-28 -8)' />
				<path className='cls-1' d='M89,92a25,25,0,0,1-25,25' transform='translate(-28 -8)' />
				<line className='cls-1' x1='36' x2='36' y1='20' y2='109' />
				<line className='cls-1' x1='11' x2='61' y1='81' y2='81' />
				<line className='cls-1' x1='11' x2='61' y1='53' y2='53' />
				<rect className='cls-2' height='28' rx='4' width='72' />
			</svg>
		</>
	);
};

export default TBAIcon;
