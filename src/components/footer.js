import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  padding: 16px;
  background: #efefef;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyled>
      &copy; Chris Sanders 2021
    </FooterStyled>
  )
}