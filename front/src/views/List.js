import { useQuery } from '@apollo/react-hooks'
import { Box, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import React, { useState } from 'react'
import { fixFloatAfterDigit } from '../common/util'
import BookItem from '../components/BookItem'
import { booksQuery } from '../queries/books'

const List = props => {
  const { data, loading } = useQuery(booksQuery)
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ selectedBooks, selectBooks ] = useState([])
  return (
    <div>
      <div>{ loading && 'loading...' }</div>
      <Box textAlign="right">Total books: {selectedBooks.length} | Total price: {totalPrice}</Box>
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
                isBookSelected={selectedBooks.includes(book.bookId)}
                onClick={() => {
                  const bookIndex = selectedBooks.findIndex(id => id === book.bookId)
                  if (bookIndex > -1) {
                    const duplicateCart = [ ...selectedBooks ]
                    duplicateCart.splice(bookIndex, 1)
                    selectBooks(duplicateCart)
                    setTotalPrice(fixFloatAfterDigit(totalPrice - book.price))
                  } else {
                    selectBooks([ ...selectedBooks, book.bookId ])
                    setTotalPrice(fixFloatAfterDigit(totalPrice + book.price))
                  }
                }}
              />
            )) }
          </ TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default List
