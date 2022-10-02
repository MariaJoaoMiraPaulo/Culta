import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
color: ${p => p.color}; 
background-color: ${p => p.background};
padding: 3rem;`



const Section = ({backgroundColor, color, children}) => {
    return(
    <SectionWrapper color={color} background={backgroundColor}>
        {children}
    </SectionWrapper>)
}

export default Section;