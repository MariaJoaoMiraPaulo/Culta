import { Link } from 'gatsby';
import styled from 'styled-components';

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;

  &: hover {
    color: transparent;
    text-shadow:  0 0 ${({ radius }) => radius || "25px"} ${({ theme, color }) => theme.colors[color] || theme.colors.marble};
  }
`;
