import React, { useState, useCallback, useEffect } from 'react'
import Header from './components/Header'
import AddInput from './components/AddInput'
import TodoItem from './components/TodoItem'
import CheckModal from './components/Modal/CheckModal'
import './App.css'

export default function App() {
  const [isInputShow, setInputShow] = useState(false),
        [isShowCheckModal, setShowCheckModal] = useState(false),
        [todoList, setTodoList] = useState([]),
        [currentData, setCurrentData] = useState([])

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

  const openCheckModal = useCallback(
    (id) => {
      setCurrentData(() => todoList.filter((item) => item.id === id)[0])
      setShowCheckModal(true)
    },
    [todoList]
  )

  return (
    <div className="container">
      <CheckModal isShowCheckModal={isShowCheckModal} closeModal={() => setShowCheckModal(false)} data={currentData} />
      <Header openInput={openInput} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      <ul>
        {todoList.map((item) => {
          return <TodoItem key={item.id} data={item} openCheckModal={openCheckModal} />
        })}
      </ul>
    </div>
  )
}
