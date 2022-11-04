import styled from 'styled-components';
import { devices } from './devices';

export const Title = styled.h1`
  font-size: ${({ size }) => size || '60px'};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 100;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 80px;
  @media ${devices.tablet} {
    font-size: ${({ size }) => size || '90px'};
  }
}
`;

export const TitleBold = styled.h1`
  font-size: 60px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 200;
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
`;

export const SubTitleBold = styled.h1`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 100;
  line-height: 65px;
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  @media ${devices.tablet} {
    font-size: 60px;
  }
`;

export const SubTitleBolder = styled.h1`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 400;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
`;

export const Body = styled.span`
  font-size: 22px;
  line-height: 40px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  @media ${devices.tablet} {
    font-size: 28px;
  }
`;
