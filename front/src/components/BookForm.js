import { Box, Button, TextField } from '@material-ui/core'
import React from 'react'
import { useField, withFormik } from 'formik'
import { Link } from 'react-router-dom'
import urls from '../common/urls'

const Input = ({ fieldName, type = 'text' }) => {
  const [ field ] = useField(fieldName)
  return (
    <Box my={3}>
      <TextField fullWidth required id='standard-basic' type={type} { ...field }  label={fieldName} />
    </Box>
  )
}

const BookForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input fieldName='title'  />
      <Input fieldName='author'  />
      <Input type='number' fieldName='price' />
      <Box display='flex' justifyContent="center">
        <Box mx={3}>
          <Button type='submit' variant='contained' color='primary'>Submit</Button>
        </Box>
        <Box mx={3}>
          <Button component={Link} to={urls.list} variant='contained'>Cancel</Button>
        </Box>
      </Box>
    </form>
  )
}

export default withFormik({
   mapPropsToValues: props => ({
     ...props.bookValues
   }),
   handleSubmit: (values, { props, setSubmitting }) => {
     props.onSubmit(values)
     setSubmitting(false)
   }
 })(BookForm)
