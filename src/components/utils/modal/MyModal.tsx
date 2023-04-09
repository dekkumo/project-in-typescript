import React, {ReactNode} from 'react'
import classes from './MyModal.module.css'
import TodoType from '../../../models/TodoType'

interface MyModalProps {
  edit: boolean
  setEdit: (value: boolean) => void
  children: ReactNode 
}

export const MyModal: React.FC<MyModalProps> = ({children, edit, setEdit}) => {

  console.log(children)

  const closeModal = () => {
    setEdit(false)
  }

  const notCloseModal = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation()
  }

  return (
    <div 
      onClick={closeModal}
      className={(edit) ? [classes.modal, classes.active].join(' ') : classes.modal}
    >
      <div
        onClick={notCloseModal}
        className={classes.content}
      >
        {children}
      </div>
    </div>
  )
}
