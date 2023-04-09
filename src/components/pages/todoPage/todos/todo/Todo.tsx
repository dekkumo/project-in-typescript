import React, {useState} from 'react'
import classes from './Todo.module.css'
import {ReactComponent as ReactLogoComplete} from './../../../../../icons/complete.svg';
import {ReactComponent as ReactLogoDelete} from './../../../../../icons/delete.svg';
import {ReactComponent as ReactLogoEdit} from './../../../../../icons/edit.svg';
import TodoType from '../../../../../models/TodoType';

interface TodoProps {
  el: TodoType
  handleToggle: (id: number) => void 
  handleClick: (id: number) => void 
  setEdit: (value: boolean) => void
  setTodoId: (value: number) => void
}

export const Todo: React.FC<TodoProps> = ({el, handleToggle, handleClick, setEdit, setTodoId}) => {

  const editTodo = () => {
    setEdit(true)
    setTodoId(el.id)
  }

  return (
    <div className={classes.todoList}>
      <div className={el.completed ? classes.completed : classes.text__todo}>
        <span>{el.text}</span>
      </div>
      <div className={classes.container__btn}>
        <button className={classes.btn__todo} onClick={() => handleToggle(el.id)}>
          <ReactLogoComplete className={classes.icon} />
        </button>
        <button className={classes.btn__todo} onClick={() => handleClick(el.id)}>
          <ReactLogoDelete className={classes.icon} />
        </button>
        <button className={classes.btn__todo} onClick={editTodo}>
          <ReactLogoEdit className={classes.icon} />
        </button>
      </div>
    </div>
  )
}
