import {
  Image,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
} from "@chakra-ui/react";
import logo from "../../../assets/logo.svg";

const PayModal = () => {
  return (
    <>
      <ModalHeader textAlign="center">
        <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody p="5px 30px 0 30px">
        <Heading pb="20px">PayYourCakeNow.</Heading>Pay your cake now
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
};

export default PayModal;
