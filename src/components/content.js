import React from 'react'
import styled from 'styled-components'
import OrganizationItem from './ogranizationItem'


const borderColor = '#efefef'
const clearBlue = '#412dff'

const ContentStyled = styled.div`
  display: grid;
  grid-gap: 16px;
  align-content: start;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

const InputContainerStyle = styled.div`
  input {
    appearance: none;
    width: 100%;
    padding: 12px;
    border: 1px solid ${borderColor};

    &:focus {
      border: 1px solid ${clearBlue};
      outline: none;
    }
  }
`

export default function Content({ organizations }) {
  return (
    <ContentStyled>
        <h1>Organization Search</h1>
        <InputContainerStyle>
          <input type="search" name="search" />
        </InputContainerStyle>
        { organizations.length === 0
          && (
            <div className="no-results">No Results</div>
          )
        }

        { organizations.length > 0
          && (
            <ul className="results">
              { organizations.map(org => (
                <OrganizationItem org={org} key={org._id} />
              ))}
            </ul>
          )
        }
      </ContentStyled>
  )
}
