import { Link } from 'gatsby';
import styled from 'styled-components';

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;

  &: hover {
    text-shadow:  0 0 10px ${({ theme }) => theme.colors.red};
  }
`;
