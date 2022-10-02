import * as React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'
import Logo from "../components/Logo"
import Menu from "../components/Menu"
import Section from "../components/Section"

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

const IndexPage = () => {
  return (
    <Banner>
      <Header>
        <Logo/>
        <Menu/>
      </Header>
      <Section color="#ffff" backgroundColor="#cf5945">
        <h1>O que nos move é a cultura</h1>
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