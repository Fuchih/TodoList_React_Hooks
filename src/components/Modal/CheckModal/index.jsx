import React from 'react'
import Modal from '../'
import formatDate  from '../../../libs/utils'
import './index.scss'

const CheckModal = ({isShowCheckModal, data, closeModal}) => {
  return (
    <Modal
      isShowModal={isShowCheckModal}
      modalTitle="Check"
    >
    <p>Time:{formatDate(data.id)}</p>
    <p>Content:{data.content}</p>
    <p>Status:{data.completed ? 'done' : 'pending' }</p>
    <button className="confirm" onClick={closeModal}>Confirm</button>
    </Modal>
  );
}

export default CheckModal;
