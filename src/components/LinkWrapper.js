import { Link } from 'gatsby';
import styled from 'styled-components';
import { rgba } from 'polished';

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;

  &: hover {
    text-shadow:  0 0 10px ${props => rgba(props.theme.colors.red, 1)};
  }
`;
