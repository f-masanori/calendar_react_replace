import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';

const customStyles: any = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '100',
  },

  content: {
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    bottom: 'auto',
    left: '50%',
    outline: 'none',
    overflow: 'auto',
    webkitOverflowScrolling: 'touch',
    padding: '20px',
    position: 'absolute',
    right: 'auto',
    top: '50%',
    transform: 'translate(50%)'
    // transform: 'translate(-50%,-50%)',
  },
};
Modal.setAppElement('#root');
type Props = {
  children: JSX.Element;
  isOpen: boolean;
  onClick: Function;
  closeModal: () => void;
};
export const NomalModal: React.FC<Props> = ({
  children,
  isOpen,
  onClick,
  closeModal,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal} // オープン時に実行される
      onRequestClose={closeModal} // ダイアログの外側を押した時などに実行される
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
      <h2>Hello</h2>
      <button type="button" onClick={closeModal}>
        close
      </button>
      <div>I am a modal</div>
    </Modal>
  );
};
