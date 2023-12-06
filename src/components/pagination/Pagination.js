import React from 'react';
import styled from 'styled-components';
import { usePagination } from '../../hooks/usePagination';

const PaginationWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 3rem 0 4rem;
  font-size: 30px;
`;

const PageNumber = styled.span`
  &:not(:last-child) {
    padding-right: 1rem;
  }
  opacity: ${props => (props.selected ? '100%' : '30%')};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.red};
`;

const Dots = styled.span`
  &:not(:last-child) {
    padding-right: 1rem;
  }
  opacity: 30%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.red};
`;

const Pagination = ({ numPages, currentPage, handleChangePage }) => {
  const DOTS = '...';
  const range = usePagination(numPages, currentPage);
  return (
    <PaginationWrapper>
      {range.map(page => {
        return page === DOTS ? (
          <Dots key="dots">{DOTS}</Dots>
        ) : (
          <PageNumber
            key={`page ${page}`}
            selected={currentPage === page}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </PageNumber>
        );
      })}
    </PaginationWrapper>
  );
};

export default Pagination;
