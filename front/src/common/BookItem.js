import React from 'react'

const BookItem = props => {
  return (
    <li key={props.bookId}>
      author: {props.author}, bookId: {props.bookId}, price: {props.price}, title: {props.title}
      <button onClick={() => { console.log(props.title) }}>Add to cart</button>
    </li>
  )
}

export default BookItem
