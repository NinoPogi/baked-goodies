import { Dispatch, SetStateAction } from "react";
import {
  Button,
  VStack,
  Heading,
  ModalBody,
  ModalFooter,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  ButtonGroup,
} from "@chakra-ui/react";
import api from "../../services/api-client";

interface Customer {
  _id: string;
  orders: string[];
}

interface Order {
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
  customer: Customer;
  order: Order;
  setStatus: Dispatch<SetStateAction<string>>;
}

const WaitingForm = ({ customer, order, setStatus }: Props) => {
  const handleCancel = async () => {
    const response = await api.put(`/customer/cancel/${customer._id}`);
    console.log(response);
  };

  return (
    <>
      <ModalBody p="5px 30px 20px 30px">
        <VStack alignItems="Left">
          <Heading pb="20px">WaitYourCakeNow.</Heading>
          <Text>Your CakeOrder is Still Processing</Text>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th>name</Th>
                  <Th>{order.customer.name}</Th>
                </Tr>
                <Tr>
                  <Th>email</Th>
                  <Th>{order.customer.email}</Th>
                </Tr>
                <Tr>
                  <Th>phone</Th>
                  <Th>{order.customer.phone}</Th>
                </Tr>
                <Tr>
                  <Th>orderDate</Th>
                  <Th>{order.orderDate}</Th>
                </Tr>
                <Tr>
                  <Th>promiseDate</Th>
                  <Th>{order.promiseDate}</Th>
                </Tr>
                <Tr>
                  <Th>flavor</Th>
                  <Th>{order.flavor}</Th>
                </Tr>
                <Tr>
                  <Th>shape</Th>
                  <Th>{order.shape}</Th>
                </Tr>
                <Tr>
                  <Th>orderDetails</Th>
                  <Th>{order.orderDetails}</Th>
                </Tr>
                <Tr>
                  <Th>images</Th>
                  <Th>{order.images}</Th>
                </Tr>
                <Tr>
                  <Th>payment</Th>
                  <Th>{order.payment}</Th>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Property</Th>
                  <Th>value</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup spacing="96">
          <Button
            colorScheme="red"
            onClick={() => {
              handleCancel();
              setStatus("ordering");
            }}
          >
            CancelOrder
          </Button>
          {/* <Button colorScheme="pink" isDisabled>
            EditOrder
          </Button> */}
        </ButtonGroup>
      </ModalFooter>
    </>
  );
};

export default WaitingForm;
