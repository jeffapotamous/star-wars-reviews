import * as moment from 'moment';

export interface CloneWarsEpisode {
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
	releaseDate: moment.Moment;
	pros: string;
	cons: string;
	fileName: string;
	amazonLink: string;
}
