import React from 'react'
import { useField, withFormik } from 'formik'
import { Link } from 'react-router-dom'
import urls from '../common/urls'

const Input = ({ fieldName, type = 'text' }) => {
  const [ field ] = useField(fieldName)
  return (
    <div>
      <label>{fieldName}</label>
      <input type={type} { ...field } />
    </div>
  )
}

const BookForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
       <Input fieldName='title' />
       <Input fieldName='author' />
       <Input type='number' fieldName='price' />
       <button type='submit'>Submit</button>
       <Link to={urls.list}>Cancel</Link>
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
