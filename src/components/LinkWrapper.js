import styled from 'styled-components';

export const LinkWrapper = styled.button`
  text-decoration: none;
  color: inherit;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  &: hover {
    color: transparent;
    text-shadow: 0 0 ${({ radius }) => radius || null}
      ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
  }
`;
