import type { ComponentType } from 'react';
import type { Robot, RobotItem } from '@/lib/types/Robot';

import TurboContent, { robot as turbo } from '@/content/robots/2026.mdx';
import PekkaContent, { robot as pekka } from '@/content/robots/2025_ios.mdx';
import PeckContent, { robot as peck } from '@/content/robots/2025.mdx';
import WillsonContent, { robot as willson } from '@/content/robots/2024_ios.mdx';
import ToothlessContent, { robot as toothless } from '@/content/robots/2024.mdx';
import BoltContent, { robot as bolt } from '@/content/robots/2023.mdx';
import PegasusContent, { robot as pegasus } from '@/content/robots/2022.mdx';
import MambaContent, { robot as mamba } from '@/content/robots/2020.mdx';
import VenusContent, { robot as venus } from '@/content/robots/2019.mdx';
import AeleosContent, { robot as aeleos } from '@/content/robots/2018.mdx';
import OptimusContent, { robot as optimus } from '@/content/robots/2017.mdx';
import HugoContent, { robot as hugo } from '@/content/robots/2016.mdx';
import MosesContent, { robot as moses } from '@/content/robots/2015.mdx';
import AlphaContent, { robot as alpha } from '@/content/robots/2014.mdx';
import RockyContent, { robot as rocky } from '@/content/robots/2013.mdx';

export type RobotEntry = {
	robot: Robot;
	Content: ComponentType;
};

export const robotEntries: Record<string, RobotEntry> = {
	'2026': { robot: turbo as Robot, Content: TurboContent },
	'2025_ios': { robot: pekka as Robot, Content: PekkaContent },
	'2025': { robot: peck as Robot, Content: PeckContent },
	'2024_ios': { robot: willson as Robot, Content: WillsonContent },
	'2024': { robot: toothless as Robot, Content: ToothlessContent },
	'2023': { robot: bolt as Robot, Content: BoltContent },
	'2022': { robot: pegasus as Robot, Content: PegasusContent },
	'2020': { robot: mamba as Robot, Content: MambaContent },
	'2019': { robot: venus as Robot, Content: VenusContent },
	'2018': { robot: aeleos as Robot, Content: AeleosContent },
	'2017': { robot: optimus as Robot, Content: OptimusContent },
	'2016': { robot: hugo as Robot, Content: HugoContent },
	'2015': { robot: moses as Robot, Content: MosesContent },
	'2014': { robot: alpha as Robot, Content: AlphaContent },
	'2013': { robot: rocky as Robot, Content: RockyContent },
};

export const robotIds = Object.keys(robotEntries).sort().reverse();

export function getRobotItems(): RobotItem[] {
	return robotIds.map((id) => ({ ...robotEntries[id].robot, id }));
}

export function getRobotTabs(): Record<string, Pick<Robot, 'label'>> {
	return Object.fromEntries(robotIds.map((id) => [id, { label: robotEntries[id].robot.label }]));
}
