import React, { useRef } from 'react'
import Modal from '../'
import formatDate  from '../../../libs/utils'
import './index.scss'

const EditModal = ({isShowEditModal, data, submitEdit}) => {
  const inputRef = useRef(),
        checkRef = useRef()

  const formatNewData = () => {
    const value = inputRef.current.value.trim(),
          valueLength = value.length

    if (valueLength === 0) return

    const newData = {
      id: new Date().getTime(),
      content: value,
      completed: checkRef.current.checked
    }

    submitEdit(newData, data.id)
  }

  return (
    <Modal
      isShowModal= { isShowEditModal }
      modalTitle="Edit"
    >
      <p className="topic">Time:{ formatDate(data.id) }</p>
      <p className="topic">
        <textarea
         ref={ inputRef }
         defaultValue={ data.content }
         className="text-area"
        ></textarea>
      </p>
      <p className="topic">
        <label htmlFor="edit-status">status:</label>
        <input
          type="checkbox"
          defaultValue={ data.completed ? true : false}
          ref={ checkRef }
          id="edit-status"
        />
      </p>
      <button
        className="submit"
        onClick={ formatNewData }
      >
        Submit
      </button>

    </Modal>
  );
}

export default EditModal;
