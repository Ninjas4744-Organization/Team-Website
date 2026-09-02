import { makeObservable, observable, computed, action } from "mobx";

export class ItemPaginationStore<T> {
	@observable items: T[] = [];
	@observable currentPage = 0;

	constructor() {
		makeObservable(this);
	}

	@action.bound
	setItems(items: T[]) {
		this.items = items;
		if (this.currentPage >= this.totalItems) {
			this.currentPage = Math.max(this.totalItems - 1, 0);
		}
	}

	@action.bound
	setPage(page: number) {
		if (page >= 0 && page < this.totalItems) {
			this.currentPage = page;
		}
	}

	@action.bound
	nextPage() {
		if (this.totalItems === 0) return;

		this.currentPage = (this.currentPage + 1) % this.totalItems;
	}

	@action.bound
	prevPage() {
		if (this.totalItems === 0) return;

		this.currentPage = (this.currentPage - 1 + this.totalItems) % this.totalItems;
	}

	@computed
	get totalItems() {
		return this.items.length;
	}

	@computed
	get paginatedItems() {
		const start = this.currentPage - 1;
		return this.items.slice(start, start + 1);
	}
}
