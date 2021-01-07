import React from 'react'
import styled from 'styled-components'

const OrganizationItemStyled = styled.li`
  h3 {
    margin: 0 0 8px;
  }

  h5 {
    margin: 0 0 4px;
  }
  .org-meta {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default function OrganizationItem({ org }) {
  return (
    <OrganizationItemStyled>
      <h3>{org.name}</h3>
      <div className="org-meta">
        <div className="org-meta-cell">
          <h5>Number Of Employees:</h5>
          <span className="org-meta-data">{org.numberOfEmployees}</span>
        </div>
        <div className="org-meta-cell">
          <h5>Start Date:</h5>
          <span className="org-meta-data">{org.startDate}</span>
        </div>
        <div className="org-meta-cell">
          <h5>Organization Type:</h5>
          <span className="org-meta-data">{org.type}</span>
        </div>
      </div>
    </OrganizationItemStyled>
  )
}
