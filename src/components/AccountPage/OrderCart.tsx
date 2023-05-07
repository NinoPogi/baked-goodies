import { useContext, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CustomerContext } from "../../contexts/CustomerProvider";

const OrderCart = () => {
  const { orders } = useContext(CustomerContext);

  const [expandedOrderId, setExpandedOrderId] = useState<string>("");

  const toggleAccordion = (orderId: string) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId("");
    } else {
      setExpandedOrderId(orderId);
    }
  };

  return (
    <Stack>
      <Heading as="h2" size="md" mb="4">
        Orders
      </Heading>
      {orders.length > 0 ? (
        <Accordion allowToggle>
          {orders.map((order) => (
            <AccordionItem key={order._id}>
              <AccordionButton
                py="4"
                _hover={{ bg: "gray.100" }}
                _expanded={{ bg: "gray.200" }}
                onClick={() => toggleAccordion(order._id)}
              >
                <Box flex="1" textAlign="left">
                  {order.type && (
                    <Text fontWeight="bold">Type: {order.type}</Text>
                  )}
                  {order.status && <Text>Status: {order.status}</Text>}
                  {order.orderDate && (
                    <Text>
                      Order Date: {new Date(order.orderDate).toLocaleString()}
                    </Text>
                  )}
                </Box>
                <ChevronDownIcon />
              </AccordionButton>
              <AccordionPanel pb="4">
                <Box>
                  {order.promiseDate && (
                    <Text>
                      Promise Date:{" "}
                      {new Date(order.promiseDate).toLocaleString()}
                    </Text>
                  )}
                  {order._id && <Text>Order ID: {order._id}</Text>}
                  {order.flavor && <Text>Flavor: {order.flavor}</Text>}
                  {order.shape && <Text>Shape: {order.shape}</Text>}
                  {order.digits && <Text>Digits: {order.digits}</Text>}
                  {order.bundle && <Text>Bundle: {order.bundle}</Text>}
                  {order.upgrades && (
                    <Text>
                      Upgrade/s:{" "}
                      {order.upgrades.map((up, index) => (
                        <span key={index}>{up}</span>
                      ))}
                    </Text>
                  )}
                  {order.addons && (
                    <Text>
                      Addon/s:{" "}
                      {order.addons.map((add, index) => (
                        <span key={index}>{add}</span>
                      ))}
                    </Text>
                  )}
                  <Button colorScheme="red">Cancel Order</Button>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Text>No orders found.</Text>
      )}
    </Stack>
  );
};

export default OrderCart;
