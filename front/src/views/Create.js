import { useMutation } from '@apollo/react-hooks'
import React from 'react'
import BookForm from '../components/BookForm'
import { createBookMutation } from '../queries/books'

const Create = () => {
  const [createBook, { loading }] = useMutation(createBookMutation)
  return (
    <div>
      <div>{loading && 'loading...'}</div>
      <BookForm
        onSubmit={ values => { createBook({ variables: { ...values } }) }}
      />
    </div>
  )
}

export default Create
