import { TableCell, TableRow } from '@material-ui/core'
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
        <button onClick={props.onClick}>{props.cartButtonText}</button>
        <Link to={`${urls.book}/${props.bookId}/${props.title}`}>Edit book</Link>
      </TableCell>
    </TableRow>
  )
}

export default BookItem
