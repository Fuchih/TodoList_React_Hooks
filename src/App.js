import React, { useState, useCallback, useEffect } from 'react'
import Header from './components/Header'
import AddInput from './components/AddInput'
import TodoItem from './components/TodoItem'
import './App.css'

export default function App() {
  const [isInputShow, setInputShow] = useState(false),
        [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData'))
    setTodoList(todoData)
  }, [])

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoList))
  }, [todoList])

  function openInput() {
    setInputShow((pre) => !pre)
  }

  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false
    }

    setTodoList((todoList) => [dataItem, ...todoList])
    setInputShow(false)
  }, [])

  return (
    <div className="container">
      <Header openInput={openInput} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      <ul>
        {todoList.map((item) => {
          return <TodoItem key={item.id} data={item} />
        })}
      </ul>
    </div>
  )
}
