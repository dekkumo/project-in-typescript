import React, { useMemo, useRef, useState } from 'react';
import { Todos } from './todos/Todos';
import classes from './TodosPage.module.css'
import { Form } from './form/Form';
import TodoType from '../../../models/TodoType';

function TodosPage() {

  const [todos, setTodos] = useState<TodoType[]>([])
  const [select, setSelect] = useState<string>('All')
  const [search, setSearch] = useState<string>('')

  const textInput = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const id = Math.random()

    const todoObj: TodoType = {
      id: id,
      text: textInput.current ? textInput.current.value : '',
      completed: false
    }

    if (textInput.current) {
      textInput.current.value = ''
    }
    textInput.current?.focus()

    setTodos([...todos, todoObj])
  }

  const handleClick = (id: number) => {
    const newTodos = todos.filter(el => {
      return el.id !== id
    })
    setTodos(newTodos)
  }

  const handleToggle =(id: number) => {
    todos.forEach(elem => {
      if (elem.id === id) elem.completed = !elem.completed
    })
    setTodos([...todos])
  }

  const selectAndSearchTodos = () => {

    let copyTodos = [...todos]

    let selectArray: TodoType[] = []

    switch (select) {
      case 'All':
        selectArray = copyTodos;
        break;
      case 'Completed':
        selectArray = copyTodos.filter(el => {
          return el.completed === true;
        })
        break;
      case 'Uncompleted':
        selectArray = copyTodos.filter(el => {
          return el.completed === false;
        })
        break;
    }

      let searchText = search.toLowerCase()
      selectArray = selectArray.filter(el => {
      let lowerText = el.text.toLowerCase()
      return lowerText.includes(searchText)
    })

    return selectArray
  }

  const selectVarTodos = useMemo(selectAndSearchTodos, [todos, select, search])

  return (
    <div>
      <h1 className={classes.title}>Todo List</h1>
      <Form
        ref={textInput}
        setSelect={setSelect}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />

      <Todos
        selectVarTodos={selectVarTodos}
        handleClick={handleClick}
        handleToggle={handleToggle}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default TodosPage;
