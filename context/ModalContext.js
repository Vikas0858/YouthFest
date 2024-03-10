import React from "react";
import Modal from "react-modal";
import { createContext } from "react";

const ModalContext = createContext();

export const ModalProvider = (props) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.75)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
      padding: 0,
      // maxWidth: "80vw",
      maxHeight: "90vh",
      overflow: "auto",
    },
  };

  //   Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [component, setComponent] = React.useState(null);

  function openModal(component) {
    setComponent(component);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {props.children}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {component}
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalContext;
