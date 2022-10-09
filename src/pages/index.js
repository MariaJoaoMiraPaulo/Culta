import * as React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'
import Logo from "../components/Logo"
import Menu from "../components/Menu"
import Section from "../components/Section"
import { SectionTitle, Subtitle, Body } from "../styles/typographyComponents"

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/1.jpg");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
`
  
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`

const SubSection = styled.div`
width: 800px;
text-align: center;
`

const SubSectionWithColumns = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: space-between;
align-items: flex-end;`

const IndexPage = () => {
  return (
    <Banner>
      <Header>
        <Logo/>
        <Menu/>
      </Header>
      <Section color="#ffff" backgroundColor="#cf5945">
        <SectionTitle color="#ffff">Inovar a cultura</SectionTitle>
        <SubSection>
          <Body>
            O que nos move é a Cultura. Trabalhamos para inovar a forma como se comunica e oferece Cultura.  <br></br>
            Temos o privilégio de ter como matéria-prima do nosso trabalho a Arte, a História, o Património e os Museus e, por isso, comprometemo-nos com a missão de dar voz ao sector cultural de forma distinta e diferenciadora.
          </Body>
        </SubSection>
      </Section>
      <Section color="#ffff" backgroundColor="#758073">
        <SubSectionWithColumns>
          <Subtitle>O que fazemos</Subtitle>
          <Body>
            blablabla
          </Body>
        </SubSectionWithColumns>
      </Section>
    </Banner>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage