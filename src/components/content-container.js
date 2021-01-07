import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Content from './content'


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

function ContentContainer(props) {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [numberOfEmployees, setNumberOfEmployees] = useState(0)
  const [type, setType] = useState('')
  const [organizations, setOrganizations] = useState([])

  const clear = () => {
    setName('')
    setStartDate('')
    setNumberOfEmployees(0)
    setType('')
  }

  const add = (e) => {
    e.preventDefault()
    let newOrg = {
      name,
      startDate,
      numberOfEmployees,
      type,
    }
    clear()
  }

  const fetchAllOrganizations = useCallback(async () => {
    try {
      let { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://polar-falls-51090.herokuapp.com/organizations', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })

      setOrganizations(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchAllOrganizations()
  })

  return (
    <ContentContainerStyled>
      <FormStyled>
        <h1>Add Organization</h1>
        <InputContainerStyle>
          <div>
            Company Name
            <input className="name" type="text" name="name" onChange={setName} />
          </div>
          <div>
            Start Date
            <input className="start-date" type="text" name="startDate" onChange={setStartDate} />
          </div>
          <div>
            Number Of Employees
            <input className="number-of-employees" type="text" name="numberOfEmployees" onChange={setNumberOfEmployees} />
          </div>
          <div>
            Type
            <input className="type" type="text" name="type" onChange={setType} />
          </div>
        </InputContainerStyle>
        <button onClick={add}>Add Organization</button>
      </FormStyled>
      <Content organizations={organizations} />      
    </ContentContainerStyled>
  )
}


export default ContentContainer
