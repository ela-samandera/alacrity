import { useQuery } from '@apollo/react-hooks'
import React, { useState } from 'react'
import { fixFloatAfterDigit } from '../common/util'
import BookItem from '../components/BookItem'
import { booksQuery } from '../queries/books'

const List = () => {
  const { data, loading } = useQuery(booksQuery)
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ cart, setCartContent ] = useState([])
  return (
    <div>
      List view
      <div>{ loading && 'loading...' }</div>
      <ul>
        { data && data.books && data.books.map(book => (
          <BookItem
            key={book.bookId}
            {...book}
            cartButtonText={cart.includes(book.bookId) ? 'Remove from cart' : 'Add to cart'}
            onClick={() => {
              const bookIndex = cart.findIndex(() => cart.includes(book.bookId))
              if (bookIndex > -1) {
                const duplicateCart = [ ...cart ]
                duplicateCart.splice(bookIndex, 1)
                setCartContent(duplicateCart)
                setTotalPrice(fixFloatAfterDigit(totalPrice - book.price))
              } else {
                setCartContent([ ...cart, book.bookId ])
                setTotalPrice(fixFloatAfterDigit(totalPrice + book.price))
              }
            }}
          />
        )) }
      </ul>
      <p>Total cart: {cart.length} | Total price: {totalPrice}</p>
    </div>
  )
}

export default List
