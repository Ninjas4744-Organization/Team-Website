'use client';

import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { ItemPaginationStore } from "@/stores/ItemPaginationStore";
import {colors} from "@/styles/vars";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import classNames from "classnames";

const PaginationContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 1.5rem;

	> ._page_button {
        padding: 0.4rem 0.75rem;
        border-radius: 0.375rem;
		background: ${colors.surface};
        color: ${colors.text.primary};
        border: 1px solid ${colors.border};
        cursor: pointer;
        font-weight: 500;
        min-height: 40px;
		
		&.active {
			background: ${colors.accentSoft};
			border-color: ${colors.accent};
			color: ${colors.accentHover};
		}

        &:hover {
			background: ${colors.accentSoft};
			border-color: ${colors.accent};
        }

        &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
	}
	
	> ._ellipsis {
        padding: 0.4rem 0.75rem;
        color: ${colors.text.secondary};
	}
`;

type Props = {
	store: ItemPaginationStore<unknown>;
};

const Pagination = observer(({ store }: Props) => {
	const { currentPage, totalItems, nextPage, prevPage, setPage } = store;

	if (totalItems <= 0) return null;

	const getPageNumbers = (): (number | string)[] => {
		const pages: (number | string)[] = [];

		if (totalItems <= 5) {
			for (let i = 0; i < totalItems; i++) {
				pages.push(i);
			}
			return pages;
		}

		const delta = 2;
		let start = Math.max(1, currentPage - delta);
		let end = Math.min(totalItems - 2, currentPage + delta);

		if (currentPage <= delta) {
			end = 2 * delta;
		}

		if (totalItems - currentPage - 1 <= delta) {
			start = totalItems - 2 * delta - 1;
		}

		pages.push(0);
		if (start > 1) pages.push("...");

		for (let i = start; i <= end; i++) {
			if (i > 1 && i < totalItems) pages.push(i);
		}

		if (end < totalItems - 1) pages.push("...");
		if (totalItems > 1) pages.push(totalItems);

		return pages;
	};

	return (
		<PaginationContainer>
			<button className="_page_button" onClick={() => prevPage()}>
				<FaChevronLeft />
			</button>

			{getPageNumbers().map((page, idx) =>
				typeof page === "number" ? (
					<button
						className={classNames('_page_button', {active: page === currentPage})}
						key={idx}
						onClick={() => setPage(page)}>
						{page + 1}
					</button>
				) : (
					<span className="_ellipsis" key={idx}>…</span>
				)
			)}

			<button className="_page_button" onClick={() => nextPage()}>
				<FaChevronRight />
			</button>
		</PaginationContainer>
	);
});

export default Pagination;
