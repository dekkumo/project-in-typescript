import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container__link}>
        <Link className={classes.link} to='/posts'>Posts</Link>
        <Link className={classes.link} to='/'>Todos</Link>
      </div>
    </div>
  )
}
