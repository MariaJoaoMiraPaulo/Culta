import styled from 'styled-components';
import { devices } from './devices';

export const Title = styled.h1`
  font-size: 60px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 100;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 155px;
  @media ${devices.tablet} {
    font-size: 120px;
  }
  margin: 0rem;
}
`;

export const TitleBold = styled.h1`
  font-size: 60px;
  font-family: ${({ theme }) => theme.fonts.main};
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  margin: 0rem;
`;

export const SubTitleBold = styled.h1`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 65px;
  text-transform: uppercase;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  @media ${devices.tablet} {
    font-size: 60px;
  }
  margin: 0rem;
`;

export const SubTitleBolder = styled.h1`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  margin: 0rem;
`;

export const Body = styled.span`
  font-size: 22px;
  line-height: 33px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  @media ${devices.tablet} {
    font-size: 25px;
  }
  margin: 0rem;
`;

export const CopyrightText = styled.span`
  font-size: 14px;
  line-height: 80px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  @media ${devices.tablet} {
    font-size: 18px;
  }
  margin: 0rem 0.5rem;
`;

export const FooterLink = styled.span`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 50px;
  text-transform: uppercase;
  text-align: center;
  @media ${devices.tablet} {
    font-size: 40px;
  }
  margin: 0rem;
  cursor: pointer;
`;
