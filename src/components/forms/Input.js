import React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/devices';

const Label = styled.label`
  position: relative;
  margin-bottom: ${({ paddingBottomZero }) =>
    paddingBottomZero ? '0' : '2rem'};
  width: 80%;
`;

export const InputWrapper = styled.input`
  background: 0;
  border: 0;
  outline: none;
  transition: padding 0.3s 0.2s ease;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  padding: 0 2%;
  width: 96%;
  color: ${({ theme, white }) =>
    white ? theme.colors.marble : theme.colors.blue};

  option {
    color: ${({ theme, white }) =>
      white ? theme.colors.marble : theme.colors.blue};
  }

  ::placeholder {
    color: ${({ theme, white }) =>
      white ? theme.colors.marble : theme.colors.blue};
  }

  ::after {
    content: ${({ required }) => (required ? `"*"` : '')};
    color: ${({ theme, white }) =>
      white ? theme.colors.marble : theme.colors.blue};
  }

  &:focus {
    padding-bottom: 5px;
  }

  &:focus + .line {
    &:after {
      transform: scaleX(1);
    }
  }

  font-size: 1em;

  @media ${devices.laptop} {
    font-size: 1.4em;
  }

  @media ${devices.desktopL} {
    font-size: 1.8em;
  }
`;

const Line = styled.div`
  width: 100%;
  border-color: ${({ theme, white }) =>
    white ? theme.colors.marble : theme.colors.blue};
  border-style: solid;
  border-width: 0 0 1px 0;

  &:after {
    content: ' ';
    position: absolute;
    float: right;

    transform: scalex(0);
    transition: transform 0.3s ease;
  }
`;

const Input = ({
  required,
  type,
  name,
  id,
  placeholder,
  onChange,
  onKeyPress,
  paddingBottomZero = false,
  white = false,
  children,
}) => {
  return (
    <Label paddingBottomZero={paddingBottomZero}>
      <InputWrapper
        white={white}
        required={required}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {children}
      <Line white={white} />
    </Label>
  );
};

export default Input;
