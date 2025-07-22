'use client';

import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { ItemPaginationStore } from "@/stores/ItemPaginationStore";
import {colors} from "@/styles/vars";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const PaginationWrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 1.5rem;
`;

const PageButton = styled.button<{ active?: boolean }>`
	padding: 0.4rem 0.75rem;
	border-radius: 0.375rem;
	background: ${({ active }) => (active ? colors.background : "transparent")};
	color: ${({ active }) => (active ? "white" : colors.text.secondary)};
	border: 1px solid ${colors.border};
	cursor: pointer;
	font-weight: 500;
	min-height: 40px;

	&:hover {
		background: ${colors.background};
	}

	&:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
`;

const Ellipsis = styled.span`
	padding: 0.4rem 0.75rem;
	color: ${colors.text.secondary};
`;

type Props = {
	store: ItemPaginationStore<any>;
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
		<PaginationWrapper>
			<PageButton onClick={() => prevPage()} disabled={currentPage === 0}>
				<FaChevronLeft />
			</PageButton>

			{getPageNumbers().map((page, idx) =>
				typeof page === "number" ? (
					<PageButton
						key={idx}
						onClick={() => setPage(page)}
						active={page === currentPage}
					>
						{page + 1}
					</PageButton>
				) : (
					<Ellipsis key={idx}>…</Ellipsis>
				)
			)}

			<PageButton onClick={() => nextPage()} disabled={currentPage === totalItems - 1}>
				<FaChevronRight />
			</PageButton>
		</PaginationWrapper>
	);
});

export default Pagination;
