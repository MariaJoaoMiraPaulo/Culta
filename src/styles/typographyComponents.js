import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-size: 84px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 100;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
`;

export const Subtitle = styled.h1`
  font-size: 60px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 200;
  text-transform: uppercase;
`;

export const TitleBold = styled.h1`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 400;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
`;

export const Body = styled.span`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
`;
