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
      title
      price
    }
  }
`

export const createBookMutation = gql`
  mutation CreateBookMutation (
    $author: String!
    $price: Float!
    $title: String!
  ) {
    createBook(
      author: $author
      price: $price
      title: $title
    ) {
      bookId
    }
  }
`

export const editBookMutation = gql`
  mutation EditBook (
    $author: String!
    $bookId: Int!
    $price: Float!
    $title: String!
  ) {
    editBook(
      author: $author
      bookId: $bookId
      price: $price
      title: $title
    ) {
      bookId
    }
  }
`
