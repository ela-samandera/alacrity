import React from 'react'
import { NavLink } from 'react-router-dom'
import urls from '../common/urls'

const PageWrapper = props => {
  return (
    <div>
      <nav>
        <NavLink to={urls.list}>Book List</NavLink>
        <NavLink to={urls.create}>Create New Book</NavLink>
      </nav>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default PageWrapper
