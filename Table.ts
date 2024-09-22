import {writable, type Writable} from "svelte/store";

const parseCSV = () => {};

export enum ColTypes {
	Text,
	List,
	Number,
	Checkbox,
	Date,
	DateTime,
	Formula,
}

export class Table {

	private vals: Writable<any[][]>;
	private types: ColTypes[];

	subscribe;

	constructor(init: any[][]) {
		this.vals = writable(init);
		this.types = [];

		this.subscribe = this.vals.subscribe;
	}

	updateCell(row: number, col: number) {}

	addRow(pos: number = -1) {}

	removeRow(pos: number) {}

	addCol(pos: number = -1, type: ColTypes = ColTypes.Text) {
		this.vals.update(value => value.map(row => ([...row, null])));
	}

	removeCol(pos: number) {}
}
