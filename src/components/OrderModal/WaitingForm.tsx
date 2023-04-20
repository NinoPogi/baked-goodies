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

interface User {
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
  user: User;
}

const WaitingForm = ({ user }: Props) => {
  return (
    <>
      <ModalBody p="5px 30px 0 30px">
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
                  <Th>{user.customer.name}</Th>
                </Tr>
                <Tr>
                  <Th>email</Th>
                  <Th>{user.customer.email}</Th>
                </Tr>
                <Tr>
                  <Th>phone</Th>
                  <Th>{user.customer.phone}</Th>
                </Tr>
                <Tr>
                  <Th>orderDate</Th>
                  <Th>{user.orderDate}</Th>
                </Tr>
                <Tr>
                  <Th>promiseDate</Th>
                  <Th>{user.promiseDate}</Th>
                </Tr>
                <Tr>
                  <Th>flavor</Th>
                  <Th>{user.flavor}</Th>
                </Tr>
                <Tr>
                  <Th>shape</Th>
                  <Th>{user.shape}</Th>
                </Tr>
                <Tr>
                  <Th>orderDetails</Th>
                  <Th>{user.orderDetails}</Th>
                </Tr>
                <Tr>
                  <Th>images</Th>
                  <Th>{user.images}</Th>
                </Tr>
                <Tr>
                  <Th>payment</Th>
                  <Th>{user.payment}</Th>
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
        <ButtonGroup>
          <Button colorScheme="pink" isDisabled>
            CancelOrder
          </Button>
          <Button colorScheme="pink" isDisabled>
            EditOrder
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  );
};

export default WaitingForm;
