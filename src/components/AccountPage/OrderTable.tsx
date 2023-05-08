import { useState, useContext } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Order } from "../../hooks/useCustomer";
import { CustomerContext } from "../../contexts/CustomerProvider";

const OrderTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { orders } = useContext(CustomerContext);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  return (
    <TableContainer>
      <Table size={{ base: "sm", md: "md" }} colorScheme="orange">
        <Thead border="1">
          <Tr>
            <Th>Order</Th>
            <Th display={{ base: "none", xl: "table-cell" }}>Order Date</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order) => (
            <Tr key={order._id}>
              <Td>{order.type}</Td>
              <Td display={{ base: "none", xl: "table-cell" }}>
                {order.orderDate}
              </Td>
              <Td>{order.status}</Td>
              <Td>
                <Button
                  borderRadius="0 20px 0 20px"
                  onClick={() => {
                    setSelectedOrder(order);
                    onOpen();
                  }}
                >
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
