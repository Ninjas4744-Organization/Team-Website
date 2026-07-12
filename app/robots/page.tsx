import Robots from "@/components/robots/Robots";
import { getRobotItems } from '@/lib/robots';

export default function RobotsListPage() {
	return <Robots robots={getRobotItems()} />;
}
