import { useContext, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Spacer,
  Stack,
  useColorModeValue,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import apiClient from "../../services/api-client";
import { WindowSizeContext } from "../../contexts/WindowSizeProvider";
import { Order } from "../../hooks/useCustomer";

interface Props {
  orders: Order[];
  children: string;
}

const OrderCart = ({ orders, children }: Props) => {
  const { windowSize } = useContext(WindowSizeContext);
  const [expandedOrderId, setExpandedOrderId] = useState<string>("");

  const toggleAccordion = (orderId: string) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId("");
    } else {
      setExpandedOrderId(orderId);
    }
  };

  return (
    <Stack
      width={{ base: windowSize.width - 50, xl: windowSize.width - 400 }}
      height={windowSize.height}
      overflow="auto"
      borderRadius="20px"
      background={useColorModeValue("white", "gray.600")}
      padding="20px"
    >
      <Text mb="4">{children}</Text>
      {orders.length > 0 ? (
        <Accordion allowToggle>
          {orders.map((order) => (
            <AccordionItem key={order._id} border="none">
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
                      Date:{" "}
                      {new Date(order.orderDate).toLocaleString([], {
                        // year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {" ( "}
                      {(() => {
                        const minute = 60 * 1000;
                        const hour = 60 * minute;
                        const day = 24 * hour;
                        const month = 30 * day;
                        const year = 365 * day;

                        const orderDate = new Date(order.orderDate);
                        const currentDate = new Date();
                        const timeDiff =
                          currentDate.getTime() - orderDate.getTime();

                        if (timeDiff < minute) {
                          return "just now";
                        } else if (timeDiff < hour) {
                          const minutes = Math.floor(timeDiff / minute);
                          return `${minutes} minute${
                            minutes === 1 ? "" : "s"
                          } ago`;
                        } else if (timeDiff < day) {
                          const hours = Math.floor(timeDiff / hour);
                          return `${hours} hour${hours === 1 ? "" : "s"} ago`;
                        } else if (timeDiff < month) {
                          const days = Math.floor(timeDiff / day);
                          return `${days} day${days === 1 ? "" : "s"} ago`;
                        } else if (timeDiff < year) {
                          const months = Math.floor(timeDiff / month);
                          return `${months} month${
                            months === 1 ? "" : "s"
                          } ago`;
                        } else {
                          const years = Math.floor(timeDiff / year);
                          return `${years} year${years === 1 ? "" : "s"} ago`;
                        }
                      })()}
                      {" )"}
                    </Text>
                  )}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb="4">
                <Box>
                  {order.promiseDate && (
                    <Text>
                      Pickup Date:{" "}
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
                  {order.upgrades.length !== 0 ? (
                    <>
                      <Text>Upgrade/s: </Text>
                      <ul>
                        {order.upgrades.map((up, index) => (
                          <li key={index}>{up}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Text>Upgrade/s: None</Text>
                  )}
                  {order.addons.length !== 0 ? (
                    <>
                      <Text>Addon/s: </Text>
                      <ul>
                        {order.addons.map((add, index) => (
                          <li key={index}>{add}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Text>Addon/s: None</Text>
                  )}
                  {order.endImage ? (
                    <>
                      <Image src={order.endImage} boxSize="150px" />
                      <Text>Payment QR Code HERE</Text>
                    </>
                  ) : null}
                  <ButtonGroup>
                    {/* {order.status === "pickup" ? (
                      <Button isDisabled>View Results</Button>
                    ) : null} */}
                    {order.status !== "canceled" &&
                    order.status === "processing" ? (
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          apiClient.patch(`/order/${order._id}/cancel`);
                        }}
                      >
                        Cancel Order
                      </Button>
                    ) : null}
                    {order.status === "processing" ? (
                      <Button isDisabled>Edit Order</Button>
                    ) : null}
                    {order.status === "pickup" ? (
                      <Button isDisabled>Upload Proof of Payment</Button>
                    ) : null}
                    {order.status === "decline" ? (
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          apiClient.patch(`/order/${order._id}`);
                        }}
                      >
                        Accept
                      </Button>
                    ) : null}
                    {order.isDone === true ? (
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          apiClient.delete(`/order/${order._id}`);
                        }}
                      >
                        Delete
                      </Button>
                    ) : null}
                  </ButtonGroup>
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
