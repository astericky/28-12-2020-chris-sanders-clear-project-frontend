import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  padding: 16px;
  background: #fff;

  h1 {
    grid-area: logo;
    margin: 0;
    color: #412dff;
    text-align: center;
  }

  span {
    letter-spacing: 5px;
  }
`

export default function Header() {
  return (
    <HeaderStyle>
      <h1><span>CLEAR</span> Organizations</h1>
    </HeaderStyle>
  )
}
