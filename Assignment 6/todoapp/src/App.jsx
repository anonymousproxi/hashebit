import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import './App.css'
import TodoList from './components/TodoList'

const App = () => {
  const [listTodo, setlistTodo] = useState([]);
  let addlist = (inputText) => {
    if (inputText !== "")
      setlistTodo([...listTodo, inputText])
  }
  const deleteListItem = (key) => {
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key, 1);
    setlistTodo([...newlistTodo]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addlist={addlist} />
        <h1 className="app-heading">TO DO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return <TodoList item={listItem} key={i} deleteItem={deleteListItem} index={i} />
        })}
      </div>
    </div>
  )
}

export default App