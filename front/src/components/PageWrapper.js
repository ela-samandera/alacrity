import { AppBar, Box, Container, Tab, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import urls from '../common/urls'

const Header = ({ pathname }) => {
  let header = ''
  const pathLimit = pathname.indexOf('/', 1)
  const path = pathLimit === -1 ? pathname : pathname.substring(0, pathLimit)
  const startTitle = pathLimit > -1 ? pathname.indexOf('/', pathLimit + 1) : pathLimit
  const editHeader = startTitle === -1 ? '404' : `Edit book: ${pathname.substring(startTitle + 1)}`
  switch (path) {
    case urls.create: header = 'Create new book'; break;
    case urls.list: header = 'Books list'; break;
    case urls.book: header = editHeader; break;
    default: header = '404'; break;
  }
  return <>{header}</>
}

const PageWrapper = props => {
  const location = useLocation()
  return (
    <>
      <AppBar position='static'>
        <Typography>
          <Tab component={NavLink} to={urls.list} label='Book List' />
          <Tab component={NavLink} to={urls.create} label='Create New Book' />
        </Typography>
      </ AppBar>
      <Box component={Container} my={5}>
        <Typography variant='h4' component='h1'>
          <Header pathname={location.pathname}/>
        </Typography>
        <Box pt={5}>
          <Typography component='div'>{props.children}</Typography>
        </Box>
      </Box>
    </>
  )
}

export default PageWrapper
