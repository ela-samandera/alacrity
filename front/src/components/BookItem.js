import React from 'react'

const BookItem = props => {
  return (
    <li key={props.bookId}>
      author: {props.author}, bookId: {props.bookId}, price: {props.price}, title: {props.title}
      <button onClick={props.onClick}>{props.cartButtonText}</button>
    </li>
  )
}

export default BookItem
