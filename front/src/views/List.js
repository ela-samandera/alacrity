import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { booksQuery } from '../queries/books'

const List = () => {
  const { data, loading, ...rest } = useQuery(booksQuery)
  console.log(data)
  console.log(rest)
  return (
    <div>
      List view
      <div>{ loading && 'loading...' }</div>
      { data && data.books && data.books.map(book => (
        <p key={book.bookId}>author: {book.author}, bookId: {book.bookId}, price: {book.price}, title: {book.title}</p>
      )) }
    </div>
  )
}

export default List
