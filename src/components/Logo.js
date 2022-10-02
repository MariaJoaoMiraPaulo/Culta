import * as React from "react"
import styled from "styled-components"

const LogoWrapper = styled.div`
    width: min-content;
    font-size: 100px;
    color: white;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: min-content;
    grid-auto-columns: min-content;
    grid-row-gap: 40px;
    grid-template-areas:
      "c . ."
      "u . ."
      "l t a";
    span {
        line-height: 50px;
    }
    height: fit-content;
    margin: 30px;
    font-family: SangBleuOGSerif;
    font-weight: 400;
`

const C = styled.span`
grid-area: c;
&:after{
    content:"C"
}`


const U = styled.span`
grid-area: u;
&:after{
    content:"U"
}
`

const L = styled.span`
grid-area: l;
&:after{
    content:"L"
}
`

const T = styled.span`
grid-area: t;
&:after{
    content:"T"
}
`

const A = styled.span`
grid-area: a;
&:after{
    content:"A"
}
`
const Logo = () => {
    return(<LogoWrapper>
        <C/>
        <U/>
        <L/>
        <T/>
        <A/>
    </LogoWrapper>)
}

export default Logo