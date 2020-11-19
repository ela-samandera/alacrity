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
