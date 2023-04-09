import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Error.module.css'

export const Error = () => {
  return (
    <div>
      <h1 className={classes.main__title}>Oops...Sorry</h1>
      <h2 className={classes.title}>That page cannot be found</h2>
      <Link className={classes.text} to='/'>Back to the homepage...</Link>
    </div>
  )
}
