import styled from 'styled-components';
import { devices } from './devices';

export const Title = styled.h1`
  font-size: 60px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 155px;
  font-weight: 100;
  @media ${devices.tablet} {
    font-size: 120px;
  }
  margin: 0rem;
}
`;

export const SubTitle = styled.h2`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 65px;
  font-weight: 100;
  @media ${devices.tablet} {
    font-size: 60px;
  }
  margin: 0rem;
}
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
  font-weight: 100;
  @media ${devices.tablet} {
    font-size: 40px;
  }
  margin: 0rem;
  cursor: pointer;
`;
