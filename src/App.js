import React, { useState, useCallback, useEffect } from 'react'
import Header from './components/Header'
import AddInput from './components/AddInput'
import TodoItem from './components/TodoItem'
import CheckModal from './components/Modal/CheckModal'
import EditModal from './components/Modal/EditModal'
import './App.scss'

export default function App() {
  const [isInputShow, setInputShow] = useState(false),
        [isShowCheckModal, setShowCheckModal] = useState(false),
        [isShowEditModal, setShowEditModal] = useState(false),
        [todoList, setTodoList] = useState([]),
        [currentData, setCurrentData] = useState([])

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]')
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

  const completedItem = useCallback((id) => {
    setTodoList((todoList) => todoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    }))
  }, [])

  const deleteItem = useCallback((id) => {
    setTodoList((todoList) => todoList.filter(item => item.id !== id))
  }, [])

  const openCheckModal = useCallback(
    (id) => {
      _setCurrentData(todoList, id)
      setShowCheckModal(true)
    },
    [todoList]
  )

  const openEditModal = useCallback(
    (id) => {
      _setCurrentData(todoList, id)
      setShowEditModal(true)
    },
    [todoList]
  )

  function _setCurrentData(todoList, id) {
    setCurrentData(() => todoList.find((item) => item.id === id))
  }

  const submitEdit = useCallback((newData, id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item = newData
        }
        return item
      })
    )
    setShowEditModal(false)
  }, [])

  return (
    <div className="container">
      <CheckModal
        isShowCheckModal={ isShowCheckModal }
        closeModal={() => setShowCheckModal(false)}
        data={ currentData }
      />
      <EditModal
        isShowEditModal={ isShowEditModal }
        data={ currentData }
        submitEdit={ submitEdit }
      />
      <Header
        openInput={ openInput }
      />
      <AddInput
        isInputShow={ isInputShow }
        addItem={ addItem }
      />
      {
        !todoList || todoList.length === 0
        ?
        (<h3>Click + to add a task</h3>)
        :
        (
          <ul>
            {todoList.map((item) => {
              return (
                <TodoItem
                  key={ item.id } data={ item }
                  openCheckModal={ openCheckModal }
                  openEditModal={ openEditModal }
                  completedItem={ completedItem }
                  deleteItem = { deleteItem }
                />
              )
            })}
          </ul>
        )
      }

    </div>
  )
}
