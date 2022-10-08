import styled from 'styled-components';

export const SectionTitle = styled.h1`
    font-size: 84px;
    font-family: SangBleuOGSerif;
    font-weight: 100;
    color: ${p => p.color || '#cf5945'};
    text-transform: uppercase;
    padding: 0 14rem;
`

export const Subtitle = styled.h1`
    font-size: 28px;
    font-family: SangBleuOGSerif;
    font-weight: 200;
    text-transform: uppercase;
    padding: 1rem 0;
`

export const TitleBold = styled.h1`
    font-size: 16px;
    font-family: SangBleuOGSerif;
    font-weight: 400;
    color: ${p => p.color || '#cf5945'}
`

export const Body = styled.span`
    font-size: 18px;
    font-family: HelveticaNeue;
    font-weight: 200;
`