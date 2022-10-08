import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
color: ${p => p.color}; 
background-color: ${p => p.background};
text-align:center;
overflow-wrap: break-word;
padding: 3rem;
display: flex;
flex-direction: column;
align-items: center;
`;

const Section = ({backgroundColor, color, children}) => {
    return(
    <SectionWrapper color={color} background={backgroundColor}>
        {children}
    </SectionWrapper>)
}

export default Section;