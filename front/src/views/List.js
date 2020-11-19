import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import BookItem from '../common/BookItem'
import { booksQuery } from '../queries/books'

const List = () => {
  const { data, loading } = useQuery(booksQuery)
  return (
    <div>
      List view
      <div>{ loading && 'loading...' }</div>
      <ul>
        { data && data.books && data.books.map(book => (
          <BookItem key={book.bookId} {...book} />
        )) }
      </ul>
    </div>
  )
}

export default List
