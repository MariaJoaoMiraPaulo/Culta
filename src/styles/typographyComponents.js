import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 22px;
    font-family: SangBleuOGSerif;
    font-weight: 100;
    color: ${p => p.color || '#cf5945'}
`

export const TitleBold = styled.h1`
    font-size: 22px;
    font-family: SangBleuOGSerif;
    font-weight: 400;
    color: ${p => p.color || '#cf5945'}
`

export const Subtitle = styled.h1`
    font-size: 18px;
    font-family: HelveticaNeue;
    font-weight: 200;
`

export const Body = styled.span`
    font-size: 10px;
    font-family: HelveticaNeue;
    font-weight: 200;
`