import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const UnsubscribeModal = (props) => {
  return (
    <Modal
      isOpen={props.selectedSubscription}
      style={customStyles}
      onRequestClose={props.closeModal}
      contentLabel="Unsubscribe"
    >
      <div className="unsubscribe-modal-info">
        <h3>Unsubscribe From:</h3>
        {props.selectedSubscription && <p>{props.selectedSubscription.title}</p>}
      </div>
      <div className="unsubscribe-modal-buttons">
        <button 
          className="btn btn-lg"
          id="unsubscribe"
          onClick={props.cancelSubscription}>
          Yes
        </button>
        <button 
          className="btn btn-lg"
          id="dontUnsubscribe"
          onClick={props.closeModal}>
          No
        </button>
      </div>
    </Modal>
  );
}

export default UnsubscribeModal;
