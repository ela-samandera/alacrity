import { useQuery } from '@apollo/react-hooks'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import React, { useState } from 'react'
import { fixFloatAfterDigit } from '../common/util'
import BookItem from '../components/BookItem'
import { booksQuery } from '../queries/books'

const BookList = () => {
  const { data, loading } = useQuery(booksQuery)
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ cart, setCartContent ] = useState([])
  return (
    <div>
      List view
      <div>{ loading && 'loading...' }</div>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>bookId</TableCell>
              <TableCell>author</TableCell>
              <TableCell>title</TableCell>
              <TableCell>price</TableCell>
              <TableCell align='right'>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { data && data.books && data.books.map(book => (
              <BookItem
                key={book.bookId}
                {...book}
                cartButtonText={cart.includes(book.bookId) ? 'Remove from cart' : 'Add to cart'}
                onClick={() => {
                  const bookIndex = cart.findIndex(id => id === book.bookId)
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
          </ TableBody>
        </Table>
      </TableContainer>
      <p>Total cart: {cart.length} | Total price: {totalPrice}</p>
    </div>
  )
}

export default BookList
