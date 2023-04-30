import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import { Order } from "../../hooks/useCustomer";

interface Props {
  orders: Order[] | undefined;
}

const OrderTable = ({ orders }: Props) => {
  return (
    <TableContainer>
      <Table size="lg" colorScheme="orange">
        <Thead border="1">
          <Tr>
            <Th>Order</Th>
            <Th>Order Date</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order) => (
            <Tr>
              <Td>{order.type}</Td>
              <Td>{order.orderDate}</Td>
              <Td>{order.status}</Td>
              <Td>
                <Button colorScheme="pink" borderRadius="0 20px 0 20px">
                  View Order
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
