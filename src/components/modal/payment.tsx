import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
// import Lorem from "react-lorem/Lorem.jsx";

const Payment = (props) => {
  const { isOpen, onOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Lorem count={2} /> */}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            ชำระเงินแล้ว
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

Payment.propTypes = {
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

export default Payment;
