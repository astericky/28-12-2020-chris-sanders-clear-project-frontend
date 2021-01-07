import React from 'react'
import styled from 'styled-components'

const borderColor = '#efefef'

const ContentContainerStyled = styled.div`
  background: #e5ecfe;
`

const ContentStyled = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  margin: 0 auto;

  
  ul {
    list-style: none;
    border: 1px solid ${borderColor};
    margin: 0;
    background: #fff;
  }

  li {
    padding: 16px;
    border-bottom: 1px solid ${borderColor};
    margin: 0;

    &::last-child {
      border: 0;
    }
  }
`

const InputContainerStyle = styled.div`
  input {
    appearance: none;
    width: 100%;
    padding: 12px;
    border: 1px solid ${borderColor};

    &:focus {
      border: 1px solid #412dff;
      outline: none;
    }
  }

`

export default function Content() {
  return (
    <ContentContainerStyled>
      <ContentStyled>
        <InputContainerStyle>
          <input type="search" name="search" />
        </InputContainerStyle>
        <ul className="results">
          <li>No Results</li>
          <li>No Results</li>
        </ul>
      </ContentStyled>
    </ContentContainerStyled>
  )
}
