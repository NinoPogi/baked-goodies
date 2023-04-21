import {
  ModalBody,
  Heading,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import api from "../../services/api-client";
import { useState } from "react";

interface Order {
  _id: string;
  orderDate: string;
  promiseDate: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  flavor: string;
  shape: string;
  orderDetails: string;
  images: string[];
  payment: string;
}

interface Props {
  order: Order;
}

const PayingForm = ({ order }: Props) => {
  const [form, setForm] = useState({
    status: "paid",
    isPaid: true,
  });

  const handleSubmit = async () => {
    const response = await api.put(`/order/${order._id}`, form);
    console.log(response);
  };

  return (
    <>
      <ModalBody p="5px 30px 0 30px">
        <Heading pb="20px">PayYourCakeNow.</Heading>
        <Text>Pay Your Cake now</Text>
        <Text>Image here</Text>
        <Text>upload here</Text>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="pink" onClick={handleSubmit}>
          Submit
        </Button>
      </ModalFooter>
    </>
  );
};

export default PayingForm;
