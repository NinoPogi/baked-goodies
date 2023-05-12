import { useState, useEffect, useContext } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import { CustomerContext } from "../contexts/CustomerProvider";

const SignupModal = () => {
  const { customer } = useContext(CustomerContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("firsVisit");
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem("firsVisit", "done");
    }
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
        </ModalHeader>
        <ModalBody>
          <Heading pb="20px">Welcome.</Heading>
          {customer._id === "" ? (
            <>
              <Text>
                Thank you for visiting our app. Please sign up first to access
                all of our features.
              </Text>
            </>
          ) : (
            <Heading fontSize="2xl">Thank You For Signing Up</Heading>
          )}
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          {customer._id === "" ? (
            <Button
              variant="ghost"
              onClick={() => {
                navigate("/account/signup");
                onClose();
              }}
            >
              Sign Up
            </Button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;
