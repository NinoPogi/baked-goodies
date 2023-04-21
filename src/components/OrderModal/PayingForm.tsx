import {
  ModalBody,
  Heading,
  ModalFooter,
  Button,
  Text,
  Input,
  VStack,
  Card,
  Image,
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
  });

  const handleSubmit = async () => {
    const response = await api.put(`/order/${order._id}`, form);
    console.log(response);
  };

  return (
    <>
      <ModalBody p="5px 30px 0 30px">
        <Heading pb="60px">PayYourCakeNow.</Heading>
        <VStack>
          <Text>Sample Image:</Text>
          <Card mb="30px" borderRadius="30px" overflow="hidden">
            <Image
              src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/337709537_765132761769080_7876214707891305100_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHrtwKyB8PioQ7DsJpAXrXwk6Z9UTGxVjOTpn1RMbFWM7KJsEO7AWrJujLbsCkAuJHafmJnnF_qatkDQ3cGji-h&_nc_ohc=NxD4AHXCSTsAX87-kzQ&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdT-nd3wVbh_xzvDB0-IWQHA5XaLwht4k0WrfoXsHihRqg&oe=646989E9"
              boxSize="360px"
            />
          </Card>
          <Text>Down Payment</Text>
          <Text>Upload Your Proof of Payment:</Text>
          <Input
            w="340px"
            p="6px"
            type="file"
            accept=".jpg,.jpeg,.png"
            // onChange={handleImages}
            multiple
          />
        </VStack>
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
