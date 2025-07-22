import { makeObservable, observable, computed, action } from "mobx";

export class ItemPaginationStore<T> {
	@observable items: T[] = [];
	@observable currentPage = 1;

	constructor() {
		makeObservable(this);
	}

	@action.bound
	setItems(items: T[]) {
		this.items = items;
		if (this.currentPage > this.totalItems) {
			this.currentPage = this.totalItems || 1;
		}
	}

	@action.bound
	setPage(page: number) {
		if (page >= 0 && page <= this.totalItems) {
			this.currentPage = page;
		}
	}

	@action.bound
	nextPage() {
		if (this.currentPage < this.totalItems) {
			this.currentPage++;
		}
	}

	@action.bound
	prevPage() {
		if (this.currentPage > 0) {
			this.currentPage--;
		}
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
