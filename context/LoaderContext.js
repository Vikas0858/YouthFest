import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { createContext } from "react";
import loader from "../public/reloder4.gif";

const LoaderContext = createContext();

export const LoaderProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
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
      background: "black",
      border: "none",
      padding: 0,
      width: "100vw",
      height: "100vh",
      textAlign: "center",
      overflow: "auto",
      opacity: 0.9,
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
    setIsLoading(false);
  }

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {props.children}
      {isLoading && (
        <Modal
          isOpen={isLoading}
          //   onAfterOpen={afterOpenModal}
          //   onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Image
            src={loader}
            alt="loading..."
            style={{
              marginTop: "10%",
            }}
          />
        </Modal>
      )}
    </LoaderContext.Provider>
  );
};

export default LoaderContext;
