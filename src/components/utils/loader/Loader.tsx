import React from 'react'
import classes from './Loader.module.css'

export const Loader = () => {
  return (
    <div>
        <div className={classes.lds__ellipsis}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
