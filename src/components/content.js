import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { add } from '../store/actions'

const borderColor = '#efefef'
const clearBlue = '#412dff'

const ContentContainerStyled = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 300px 400px;
  justify-content: center;
  padding: 24px 16px 48px;
  background: #e5ecfe;

  h1 {
    margin: 0 ;
  }

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

const FormStyled = styled.div`
  display: grid;
  grid-gap: 16px;
  align-content: start;
  max-width: 300px;

  button {
    padding: 12px;
    border: 0;
    background: ${clearBlue};
    color: #fff;
  }
`

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

function Content() {
  return (
    <ContentContainerStyled>
      <FormStyled>
        <h1>Add Organization</h1>
        <InputContainerStyle>
          <div>
            Company Name
            <input type="text" name="name" />
          </div>
          <div>
            Start Date
            <input type="text" name="startDate" />
          </div>
          <div>
            Number Of Employees
            <input type="text" name="numberOfEmployees" />
          </div>
          <div>
            Type
            <input type="text" name="type" />
          </div>
        </InputContainerStyle>
        <button>Add Organization</button>
      </FormStyled>
      <ContentStyled>
        <h1>Organization Search</h1>
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

const mapStateToProps = ({ organizations }) => ({
  organizations,
})

const mapDispatchToProps = dispatch => ({
  add: dispatch(add()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
