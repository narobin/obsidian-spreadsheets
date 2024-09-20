import { ItemView, WorkspaceLeaf } from "obsidian";
import Table from "./Table.svelte";

export const VIEW_TYPE_TABLE = "table-view";

export class TableView extends ItemView {
	component?: Table;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
		this.contentEl.setCssStyles({
			padding: "0",
		});
	}

	getViewType() {
		return VIEW_TYPE_TABLE;
	}

	getDisplayText() {
		return "Table";
	}

	getIcon() {
		return "table"
	}

	async onOpen() {
		this.component = new Table({
			target: this.contentEl,
			props: {
				nums: [
					["top","bottom","left","right","front","back"],
					[1,2,3,4,5,6],
					[1,2,3,4,5,6],
				],
			}
		});
	}

	async onClose() {
		this.component?.$destroy();
	}
}
