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
import apiClient from "../../services/api-client";

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
      <Text mb="4">Orders</Text>
      {orders.length > 0 ? (
        <Accordion allowToggle>
          {orders.map((order) => (
            <AccordionItem key={order._id}>
              <AccordionButton
                py="4"
                onClick={() => toggleAccordion(order._id)}
              >
                <Box flex="1" textAlign="left">
                  {order.type && (
                    <Text fontWeight="bold">Type: {order.type}</Text>
                  )}
                  {order.status && <Text>Status: {order.status}</Text>}
                  {order.orderDate && (
                    <Text>
                      Order Date:{" "}
                      {new Date(order.orderDate).toLocaleString([], {
                        // year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
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
                      {new Date(order.promiseDate).toLocaleString([], {
                        // year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Text>
                  )}
                  {order._id && <Text>Order ID: {order._id}</Text>}
                  {order.dedication && (
                    <Text>Dedication: {order.dedication}</Text>
                  )}
                  {order.orderDetails && (
                    <Text>Order Details: {order.orderDetails}</Text>
                  )}
                  {order.flavor && <Text>Flavor: {order.flavor}</Text>}
                  {order.shape && <Text>Shape: {order.shape}</Text>}
                  {order.digits && <Text>Digits: {order.digits}</Text>}
                  {order.bundle && <Text>Bundle: {order.bundle}</Text>}
                  {order.upgrades ? (
                    <Text>
                      Upgrade/s:{" "}
                      {order.upgrades.map((up, index) => (
                        <span key={index}>{up}</span>
                      ))}
                    </Text>
                  ) : (
                    <Text>Upgrade/s: None</Text>
                  )}
                  {order.addons ? (
                    <Text>
                      Addon/s:{" "}
                      {order.addons.map((add, index) => (
                        <span key={index}>{add}</span>
                      ))}
                    </Text>
                  ) : (
                    <Text>Addon/s: None</Text>
                  )}
                  {order.status !== "canceled" ? (
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        apiClient.patch(`/order/${order._id}/cancel`);
                      }}
                    >
                      Cancel Order
                    </Button>
                  ) : null}
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
