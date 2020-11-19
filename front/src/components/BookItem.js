import { Box, Button, IconButton, TableCell, TableRow } from '@material-ui/core'
import { AddShoppingCart as AddShoppingCartIcon, Delete as DeleteIcon } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import urls from '../common/urls'

const BookItem = props => {
  return (
    <TableRow>
      <TableCell align='center'>{props.bookId}</TableCell>
      <TableCell>{props.author}</TableCell>
      <TableCell>{props.title}</TableCell>
      <TableCell>${props.price}</TableCell>
      <TableCell align='right'>
        <Box display='inline'>
          <Button
            component={Link}
            to={`${urls.book}/${props.bookId}/${props.title}`}
            size='small'
            variant='outlined'
            color='primary'
          >
            Edit
          </Button>
        </Box>
        <Box display='inline' ml={1}>
          {
            props.isBookSelected
            ? <IconButton onClick={props.onClick} color='secondary'><DeleteIcon /></IconButton>
            : <IconButton onClick={props.onClick} color='primary'><AddShoppingCartIcon /></IconButton>
          }
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default BookItem
