import {
  ModalBody,
  Heading,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";

const PaidForm = () => {
  return (
    <>
      <ModalBody p="5px 30px 0 30px">
        <Heading pb="20px">WaitYourCakeNow.</Heading>
        <Text>Your Cake is Now Being Made</Text>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
};

export default PaidForm;
