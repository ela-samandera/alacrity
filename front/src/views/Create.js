import { useMutation } from '@apollo/react-hooks'
import { Alert } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import BookForm from '../components/BookForm'
import { createBookMutation } from '../queries/books'

const Create = () => {
  const [ success, setSuccess ] = useState()
  const [createBook, { data, loading, error }] = useMutation(createBookMutation, {
    onError: e => { console.log(e) }
  })
  useEffect(() => {
    if (data && data.createBook) {
      setSuccess('Book was created successfully.')
    }
  }, [data])
  return (
    <div>
      {loading && <Alert variant='outlined' severity='info'>loading...</Alert>}
      <BookForm
        bookValues={{
          author: '',
          price: '',
          title: ''
        }}
        error={error}
        loading={loading}
        onSubmit={ values => { createBook({ variables: { ...values } }) }}
        success={success}
      />
    </div>
  )
}

export default Create
