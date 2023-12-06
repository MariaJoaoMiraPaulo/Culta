import { useMemo } from 'react';

const DOTS = '...';
/**
 * Should return the range of numbers to be displayed in
 * our pagination component as an array.
 * https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
 */
export const usePagination = (numPages, currentPage, siblingCount = 1) => {
  const paginationRange = useMemo(() => {
    const range = (start, end) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= numPages) {
      return range(1, numPages);
    }

    const firstPageIndex = 1;
    const lastPageIndex = numPages;

    const distanceToMostLeftSibling = Math.max(
      currentPage - siblingCount,
      firstPageIndex,
    );
    const distanceToMostRightSibling = Math.min(
      currentPage + siblingCount,
      lastPageIndex,
    );

    const shouldShowLeftDots = distanceToMostLeftSibling > 2;
    const shouldShowRightDots = distanceToMostRightSibling <= numPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, numPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(numPages - rightItemCount + 1, numPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(
        distanceToMostLeftSibling,
        distanceToMostRightSibling,
      );
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [numPages, siblingCount, currentPage]);

  return paginationRange;
};
