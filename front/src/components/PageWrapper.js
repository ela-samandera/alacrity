import { AppBar, Container, Tab, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import urls from '../common/urls'

const PageWrapper = props => {
  return (
    <>
      <AppBar position='static'>
        <Typography>
          <Tab component={NavLink} to={urls.list} label='Book List' />
          <Tab component={NavLink} to={urls.create} label='Create New Book' />
        </Typography>
      </ AppBar>
      <Typography component={Container}>
        {props.children}
      </Typography>
    </>
  )
}

export default PageWrapper
