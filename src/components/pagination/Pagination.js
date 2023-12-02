import React, { useState } from 'react';
import styled from 'styled-components';

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

const Pagination = ({ numPages, currentPage, handleChangePage }) => {
  return (
    <PaginationWrapper>
      {Array.from(Array(numPages).keys()).map(idx => (
        <PageNumber
          key={`page ${idx + 1}`}
          selected={currentPage === idx + 1}
          onClick={() => handleChangePage(idx + 1)}
        >
          {idx + 1}
        </PageNumber>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
