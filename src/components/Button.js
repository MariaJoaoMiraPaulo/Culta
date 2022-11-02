import styled from 'styled-components';
import ArrowIcon from '../icons/ArrowIcon';
import React from 'react';

const ButtonWrapper = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.secondary};
  border-radius: 0px;
  padding: 10px 50px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.marble};
  border: 0px;
  font-size: 15px;
  text-transform: uppercase;

  &:hover {
    background: #3783a3;
  }

  & svg {
    margin-left: 5px;
    top: 1px;
    position: relative;
    width: 15px;
  }
`;

const ButtonIconWrapper = styled.div`
  width: 35px;
`;

export const Button = ({ children, onClick }) => {
  return (
    <ButtonWrapper>
      {children}
      <ArrowIcon onClick={onClick} color="marble" />
    </ButtonWrapper>
  );
};

export const ButtonAsIcon = ({ onClick, color }) => {
  return (
    <ButtonIconWrapper>
      <ArrowIcon onClick={onClick} color={color} />
    </ButtonIconWrapper>
  );
};
