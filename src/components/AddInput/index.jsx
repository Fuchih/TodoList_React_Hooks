import React, { useRef } from 'react'
import './index.scss';

const AddInput = ({isInputShow, addItem }) => {
  const inputRef = useRef()

  function submitValue() {
    const inputValue = inputRef.current.value.trim()
    if(inputValue.length === 0) return
    addItem(inputValue)
    inputRef.current.value = ''
  }

  return (
    <>
      {
        isInputShow
        ?
        (
          <div className="input-container">
            <input ref={inputRef} type="text" placeholder="Add Todo here ..."/>
            <button onClick={ () => submitValue() }>Add</button>
          </div>
        )
        :
        ''
      }
    </>
  );
}

export default AddInput
