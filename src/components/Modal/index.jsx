import React from 'react'
import './index.scss'

const Modal = ({isShowModal, modalTitle, children}) => {
  return (
    <>
      {
        isShowModal
        ?
        (
          <div className="modal">
            <div className="inner">
              <div className="m-header">{modalTitle}</div>
              <div className="content-wrapper">
                { children }
              </div>
            </div>
          </div>
        )
        :
        ''
      }
    </>
  )
}

export default Modal;
