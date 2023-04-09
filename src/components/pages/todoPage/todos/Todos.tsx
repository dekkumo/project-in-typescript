import React, { useEffect, useRef, useState } from 'react'
import { MyModal } from '../../../utils/modal/MyModal'
import { Todo } from './todo/Todo'
import classes from './Todos.module.css'
import TodoType from '../../../../models/TodoType'


interface TodosProps {
  selectVarTodos: TodoType[]
  handleToggle: (id: number) => void
  handleClick: (id: number) => void
  todos: TodoType[]
  setTodos: (value: React.SetStateAction<TodoType[]>) => void
}

export const Todos: React.FC<TodosProps> = ({selectVarTodos, handleToggle, handleClick, todos, setTodos}) => {

  const [todoId, setTodoId] = useState<number>()
  const [edit, setEdit] = useState<boolean>(false)

  const inputText = useRef<HTMLInputElement>(null)

  let textOnInput = {} as TodoType 

  if (todoId) {
    textOnInput = selectVarTodos.find(el => {
      return el.id === todoId
    }) || {} as TodoType

    if (inputText.current) {
      inputText.current.value = textOnInput.text
    }
  }
  
  const saveEditedTodo = () => {
    let todosCopy = [...todos]
    todosCopy = todosCopy.map(el => {
      if (el.id === todoId) {
        return {
          ...el,
          text: inputText.current ? inputText.current.value : ''
        }
      } else {
        return el
      }
    })
    setTodos(todosCopy)
    setEdit(false)
  }

  const closeModal = () => {
    setEdit(false)
  }


  return (
    <div className={classes.container__todos}>
      {selectVarTodos.map(el => (
        <Todo
          key={el.id}
          el={el}
          handleClick={handleClick}
          handleToggle={handleToggle}
          setTodoId={setTodoId}
          setEdit={setEdit}
        />
      ))}
      <MyModal
        edit={edit}
        setEdit={setEdit}
      >
        <div className={classes.container__modal}>
          <input
            ref={inputText}
            className={classes.input__modal}
          />
          <div className={classes.btn__container}>
            <button className={classes.btn__modal} onClick={saveEditedTodo}>save</button>
            <button onClick={closeModal} className={classes.btn__modal}>cancel</button>
          </div>
        </div>
      </MyModal>
    </div>
  )
}
