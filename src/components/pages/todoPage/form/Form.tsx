import React, { Ref, forwardRef } from 'react'
import classes from './Form.module.css'

interface FormProps {
  setSelect: (select: string) => void;
  setSearch: (search: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  ref: Ref<HTMLInputElement>
}

export const Form: React.FC<FormProps> = forwardRef<HTMLInputElement, FormProps>((props, ref) => {

  const selectTodo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.setSelect(e.target.value)
  }

  const searchTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value)
  }

  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <div className={classes.container__add}>
        <input
          className={classes.input}
          required
          pattern="^[^\s]+(\s.*)?$"
          ref={ref}
          placeholder='new todo'
        />
        <button
          className={classes.button}
          type='submit'
        >
        Add todo
      </button>
      </div>

      <div className={classes.container__search}>
        <select className={classes.select} onChange={selectTodo}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>

        <input
          className={classes.searchInput}
          onInput={searchTodo}
          placeholder='search'
        />
      </div>
    </form>
  )
})
