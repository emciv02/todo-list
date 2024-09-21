
import React from 'react';
declare global {
    interface Window {
      my_modal_3: HTMLFormElement;
    }
  }
interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps>= ({ modalOpen, setModalOpen, children }) => {
    return (
    <div className={`modal ${modalOpen ? "modal-open": ""}`}>
       <div className="modal-box relative ">
        <label 
        htmlFor='my-modal-3'
        className="btn btn-circle btn-sm btn-outline flex items-center absolute top-0 right-0 text-[20px] mr-4 mt-2"
        onClick={() => setModalOpen(false)}>
            <div className='flex items-center text-sm'>
                X
            </div>
        </label>
        {children}
       </div>
    </div>

    )
};

export default Modal;
