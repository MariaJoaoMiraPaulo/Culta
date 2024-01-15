import React from 'react';
import styled from 'styled-components';
import { usePagination } from '../../hooks/usePagination';

const PaginationWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 3rem 0 4rem;
  font-size: 30px;
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.red};
`;

const PageNumber = styled.span`
  &:not(:last-child) {
    padding-right: 1rem;
  }
  opacity: ${props => (props.selected ? '100%' : '30%')};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: lighter;
`;

const Dots = styled.span`
  &:not(:last-child) {
    padding-right: 1rem;
  }
  opacity: 30%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: lighter;
`;

const Pagination = ({ numPages, currentPage, handleChangePage, color }) => {
  const DOTS = '...';
  const range = usePagination(numPages, currentPage);
  return (
    <PaginationWrapper color={color}>
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
