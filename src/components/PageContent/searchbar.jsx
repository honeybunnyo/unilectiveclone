import React, { useState } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";

const searchbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSearchClick = () => {
    onOpen();
  };
  return (
    <>
      <Button
        style={{
          width: "97%",
          height: "40px",
          alignItems: "center",
          padding: "8px",
          color: "#989EFF",
          borderRadius: "6px",
          cursor: "pointer",
          border: "2px solid #989EFF",
        }}
        onClick={handleSearchClick}
      >
        <img
          src="/search.svg"
          alt="Search Logo"
          style={{ marginRight: "16px" }}
        />
        Search for a course e.g COMP1511
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} centerContent>
        <ModalOverlay />
        <ModalContent
          style={{
            top: "40%",
          }}
        >
          <ModalHeader>Press dismiss to close</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Dismiss
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default searchbar;
