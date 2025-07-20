export type ValLabelPairInput = {[val: string]: string} | {[val: string]: {label: string}} | Map<string, string> | [string, string][];
export type ValLabelPair = {val: string|number, label: string}[];

//output: [{val, label}, {val, label}, ...]
//input:
//object/map: {val: label, val: {label, ...}, ...}
//array: [val, [val, label], ...]
export const allToValLabelPairs = (obj: ValLabelPairInput): ValLabelPair => {
	const result = [];
	if (obj === undefined)
		return [];
	if (obj instanceof Map) {
		for (const [val, label] of obj)
			result.push({val, label});
	} else if (Array.isArray(obj)) {
		for (const [i, a] of obj.entries()) {
			result.push(
				Array.isArray(a) ? {val: a[0], label: a[1]} :
					typeof a === 'object' ? a : //already a pair?
						{val: i, label: a}
			);
		}
	} else {
		for (const [val, label] of Object.entries(obj)) {
			const tLabel = label?.label || label;
			result.push({val, label: tLabel});
		}
	}
	return result;
};
