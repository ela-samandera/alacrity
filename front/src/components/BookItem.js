import React from 'react'
import { Link } from 'react-router-dom'
import urls from '../common/urls'

const BookItem = props => {
  return (
    <li key={props.bookId}>
      author: {props.author}, bookId: {props.bookId}, price: {props.price}, title: {props.title}
      <button onClick={props.onClick}>{props.cartButtonText}</button>
      <Link to={`${urls.book}/${props.bookId}`}>Edit book</Link>
    </li>
  )
}

export default BookItem
