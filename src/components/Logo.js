import * as React from "react"
import styled from "styled-components"

const LogoWrapper = styled.div`
    width: min-content;
    font-size: 80px;
    color: #f0ede3;
    display: grid;
    grid-template-columns: repeat(9, 60px);
    grid-row-gap: 30px;
    grid-template-areas:
      "c . ."
      "u . ."
      "l t a";
    span {
        line-height: 50px;
    }
    height: fit-content;
    margin: 3rem;
    font-family: SangBleuOGSerif;
    font-weight: 200;
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