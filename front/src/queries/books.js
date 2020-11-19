import { gql } from '@apollo/client'

export const booksQuery = gql`
  query Books {
    books {
      author
      bookId
      title
      price
    }
  }
`

export const bookQuery = gql`
  query Book($bookId: Int!) {
    book (bookId: $bookId) {
      author
      bookId
      title
      price
    }
  }
`
