import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const robotsDirectory = resolve(root, 'content/robots');
const outputPath = resolve(root, 'data/tba-events.json');
const checkOnly = process.argv.includes('--check');
const ifMissing = process.argv.includes('--if-missing');
const authKey = process.env.TBA_AUTH_KEY;

async function collectEventKeys() {
	const files = (await readdir(robotsDirectory)).filter((file) => file.endsWith('.mdx'));
	const keys = new Set();

	for (const file of files) {
		const source = await readFile(resolve(robotsDirectory, file), 'utf8');
		const compsMatch = source.match(/\bcomps\s*:\s*(\[[\s\S]*?\])/);

		if (!compsMatch) {
			throw new Error(`Could not find a comps array in ${file}`);
		}

		let comps;
		try {
			comps = JSON.parse(compsMatch[1]);
		} catch {
			throw new Error(`The comps array in ${file} must contain JSON-compatible strings`);
		}

		for (const eventKey of comps) {
			if (typeof eventKey !== 'string' || !/^\d{4}[a-z0-9]+$/.test(eventKey)) {
				throw new Error(`Invalid TBA event key ${JSON.stringify(eventKey)} in ${file}`);
			}
			keys.add(eventKey);
		}
	}

	return [...keys].sort();
}

async function fetchEventName(eventKey) {
	const response = await fetch(
		`https://www.thebluealliance.com/api/v3/event/${eventKey}/simple`,
		{
			headers: {
				'X-TBA-Auth-Key': authKey,
				'User-Agent': 'Ninjas4744-Team-Website/event-name-updater',
			},
		},
	);

	if (!response.ok) {
		throw new Error(`TBA returned ${response.status} ${response.statusText} for ${eventKey}`);
	}

	const event = await response.json();
	if (typeof event.name !== 'string' || event.name.length === 0) {
		throw new Error(`TBA returned no event name for ${eventKey}`);
	}

	return event.name;
}

const eventKeys = await collectEventKeys();
const current = await readFile(outputPath, 'utf8').catch(() => '{}\n');
let cachedNames;

try {
	cachedNames = JSON.parse(current);
} catch {
	throw new Error('data/tba-events.json contains invalid JSON');
}

const missingKeys = eventKeys.filter(
	(eventKey) => typeof cachedNames[eventKey] !== 'string' || cachedNames[eventKey].length === 0,
);

if (ifMissing && missingKeys.length === 0) {
	console.log(`All ${eventKeys.length} event names are already cached.`);
	process.exit(0);
}

if (!authKey) {
	console.error('Missing TBA_AUTH_KEY. Create a read API key at https://www.thebluealliance.com/account');
	process.exit(1);
}

const keysToFetch = ifMissing ? missingKeys : eventKeys;
const names = ifMissing ? { ...cachedNames } : {};

// Fetch sequentially to keep the script gentle on the public TBA API.
for (const [index, eventKey] of keysToFetch.entries()) {
	process.stdout.write(`[${index + 1}/${keysToFetch.length}] ${eventKey}\r`);
	names[eventKey] = await fetchEventName(eventKey);
}

process.stdout.write(' '.repeat(60) + '\r');
const sortedNames = Object.fromEntries(eventKeys.map((eventKey) => [eventKey, names[eventKey]]));
const output = `${JSON.stringify(sortedNames, null, 2)}\n`;

if (current === output) {
	console.log(`Event names are current (${eventKeys.length} events).`);
	process.exit(0);
}

if (checkOnly) {
	console.error('Event names are stale. Run npm run events:update.');
	process.exit(1);
}

await writeFile(outputPath, output, 'utf8');
console.log(
	ifMissing
		? `Fetched ${missingKeys.length} new event name${missingKeys.length === 1 ? '' : 's'}.`
		: `Updated ${eventKeys.length} event names in data/tba-events.json.`,
);
