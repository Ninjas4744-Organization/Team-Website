import eventNames from '@/data/tba-events.json';

export const tbaEventNames: Record<string, string> = eventNames;

export function getTbaEventName(eventKey: string): string {
	return tbaEventNames[eventKey] ?? eventKey;
}

export function getTbaEventUrl(eventKey: string): string {
	return `https://www.thebluealliance.com/event/${eventKey}`;
}
