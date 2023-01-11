import styled from 'styled-components';
import { devices } from './devices';

export const Title = styled.h1`
  font-size: 50px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 80px;
  font-weight: 100;
  @media ${devices.tablet} {
    font-size: 120px;
    line-height: 155px;
  }
  margin: 0rem;
}
`;

export const MenuTitle = styled.h1`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 80px;
  font-weight: 100;
  @media ${devices.tablet} {
    font-size: 70px;
    line-height: 100px;
  }
  margin: 0rem;
}
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 35px;
  font-weight: 100;
  @media ${devices.tablet} {
    font-size: 60px;
    line-height: 65px;
  }
  margin: 0rem;
}
`;

export const SubTitle2 = styled.h2`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 40px;
  font-weight: 100;
  @media ${devices.tablet} {
    font-size: 45px;
    line-height: 65px;
  }
  margin: 0rem;
}
`;

export const Body = styled.span`
  font-size: 20px;
  line-height: 33px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  @media ${devices.tablet} {
    font-size: 25px;
  }
  margin: 0rem;
`;

export const BodyHeading = styled(Body)`
  font-size: 25px;
  @media ${devices.tablet} {
    font-size: 40px;
  }
`;

export const BodyBold = styled(Body)`
  font-weight: 400;
`;

export const BodyUnderlined = styled(Body)`
  text-decoration: underline;
`;

export const BodySmall = styled.span`
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
`;

export const Caption = styled.span`
  font-size: 14px;
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '24px')};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 200;
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  @media ${devices.tablet} {
    font-size: 18px;
    line-height: ${({ lineHeight }) =>
      lineHeight ? `${lineHeight}px` : '30px'};
  }
  margin: ${({ margin }) => (margin ? `${margin}` : '0rem 0.5rem')};
`;

export const AnimationTitle = styled.h2`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme, color }) => theme.colors[color] || 'inherit'};
  text-transform: uppercase;
  line-height: 65px;
  font-weight: 100;
  margin: 0rem;

  @media ${devices.mobileM} {
    font-size: 19px;
  }

  @media ${devices.laptop} {
    font-size: 30px;
  }

  @media ${devices.desktop} {
    font-size: 50px;
  }
}
`;
