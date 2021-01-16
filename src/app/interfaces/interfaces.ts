export interface CloneWarsEpisode {
	id: number;
	name: string;
	season?: number;
	episode?: number;
	link: string;
	chronologicalOrder: number;
	releaseOrder: number;
}

export interface Book {
	id: number;
	name: string;
	pros: string;
	cons: string;
	fileName: string;
	amazonLink: string;
	googlePlayLink?: string;
	appleLink?: string;
	hasCharacterSection?: boolean;
}

export interface TableColumn {
	header: string;
	field: string;
	sort: boolean;
	style?: any;
	classCompare?: string;
	type?: string;
}

export interface Tag {
	id: number;
	name: string;
}

export interface Relationship {
	table1: number;
	table2: number;
}
