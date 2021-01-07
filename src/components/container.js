import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'

const ContainerStyled = styled.div`
  display: grid;
  grid-template-rows: max-content auto minmax(min-content, 200px);
  width: 100vw;
  min-height: 100vh;
  color: #444;
`

export default function Container({ children }) {
  return (
    <ContainerStyled>
      <Header />
      {children}
      <Footer />
    </ContainerStyled>
  )
}