import { BaseSyntheticEvent, useContext, useState } from "react";
import {
  Box,
  Text,
  Button,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Spacer,
  Stack,
  ButtonGroup,
  Image,
  HStack,
  Badge,
  BadgeProps,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Input,
  Flex,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { BsArrowRight, BsCalendarEvent, BsCalendarCheck } from "react-icons/bs";
import { GiChemicalDrop, GiCakeSlice } from "react-icons/gi";
import { BiIdCard } from "react-icons/bi";
import { TfiRuler } from "react-icons/tfi";
import { ImPriceTag } from "react-icons/im";
import { MdSettings, MdAdd } from "react-icons/md";
import { IoShapesOutline } from "react-icons/io5";
import apiClient from "../../services/api-client";
import { Order } from "../../hooks/useCustomer";
import { CustomerContext } from "../../contexts/CustomerProvider";
import FeedbackModal from "./FeedbackModal";
import PaymentModal from "./PaymentModal";

interface Props {
  orders: Order[];
  children: string;
}

const OrderCart = ({ orders, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();
  const { customer } = useContext(CustomerContext);
  const [expandedOrderId, setExpandedOrderId] = useState<string>("");
  const bgAccordion = useColorModeValue("pink.50", "gray.800");

  const statusBadge: { [key: string]: BadgeProps } = {
    processing: { colorScheme: "green", children: "Processing" },
    decline: { colorScheme: "red", children: "Declined" },
    canceled: { colorScheme: "yellow", children: "Canceled" },
    accepted: { colorScheme: "green", children: "Accepted" },
    pickup: { colorScheme: "pink", children: "Ready 4 Pickup" },
    paid: { colorScheme: "green", children: "Ready 4 Pickup" },
  };

  const toggleAccordion = (orderId: string) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId("");
    } else {
      setExpandedOrderId(orderId);
    }
  };

  const getTimeDifference = (pickupDate: string) => {
    const now = new Date();
    const timeDiff = new Date(pickupDate).getTime() - now.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const hoursDiff = Math.ceil(timeDiff / (1000 * 3600));
    return daysDiff > 0
      ? `${daysDiff} days from now`
      : hoursDiff > 0
      ? `${hoursDiff} hours from now`
      : "Done";
  };

  const getTimeAfter = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const diffInDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} after`;
  };

  return (
    <Box>
      <Text mb="4">{children}</Text>
      {orders.length > 0 ? (
        <Accordion allowToggle>
          {orders.map((order) => (
            <AccordionItem
              key={order._id}
              border="none"
              background={bgAccordion}
              borderRadius="10px"
              marginY="10px"
            >
              <AccordionButton
                py="4"
                onClick={() => toggleAccordion(order._id)}
              >
                <Box flex="1" textAlign="left">
                  <HStack>
                    {order.dedication ? (
                      <Text fontWeight="bold">{order.dedication}</Text>
                    ) : (
                      order.type && <Text fontWeight="bold">{order.type}</Text>
                    )}
                    {order.status && (
                      <Badge
                        colorScheme={statusBadge[order.status].colorScheme}
                      >
                        {statusBadge[order.status].children}
                      </Badge>
                    )}
                    {order.status !== "pickup" &&
                    order.status !== "canceled" ? (
                      <>
                        {order.isEdited && <Badge>Edited</Badge>}
                        {order.isRush && <Badge>Rush</Badge>}
                      </>
                    ) : null}
                    <Spacer />
                    {order.orderDate && (
                      <Text paddingRight="20px">
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
                      </Text>
                    )}
                  </HStack>
                  <HStack>
                    <BsCalendarEvent />
                    {order.orderDate && (
                      <Text>
                        {new Date(order.orderDate).toLocaleString([], {
                          // year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Text>
                    )}
                    <BsArrowRight />
                    {order.promiseDate && (
                      <Text>
                        {new Date(order.promiseDate).toLocaleString([], {
                          // year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                      </Text>
                    )}
                    <Spacer />
                    {order.status !== "pickup" ? (
                      <HStack paddingRight="20px">
                        <Text> {getTimeDifference(order.promiseDate)}</Text>
                        <BsCalendarCheck />
                      </HStack>
                    ) : null}
                  </HStack>
                  {order.dedication
                    ? order.type && (
                        <HStack>
                          <GiCakeSlice />
                          <Text>{order.type}</Text>
                        </HStack>
                      )
                    : null}
                  {order.size && (
                    <HStack>
                      <TfiRuler />
                      <Text>{order.size.replace(/^(.*)₱(.).*/, "$1")}</Text>
                    </HStack>
                  )}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb="4">
                <Box>
                  {order._id && (
                    <HStack>
                      <BiIdCard />
                      <Text>{order._id}</Text>
                    </HStack>
                  )}
                  {/* {order.price && (
                    <HStack>
                      <ImPriceTag />
                      <Text>{order.price}</Text>
                    </HStack>
                  )} */}
                  {order.flavor && (
                    <HStack>
                      <GiChemicalDrop />
                      <Text> {order.flavor}</Text>
                    </HStack>
                  )}
                  {order.shape && (
                    <HStack>
                      <IoShapesOutline />
                      <Text>{order.shape.replace(/^(.*)₱(.).*/, "$1")}</Text>
                    </HStack>
                  )}

                  {order.digits && (
                    <Text>
                      Digits: {order.digits.replace(/^(.*)₱(.).*/, "$1")}
                    </Text>
                  )}
                  {order.bundle && (
                    <Text>
                      Bundle: {order.bundle.replace(/^(.*)₱(.).*/, "$1")}
                    </Text>
                  )}
                  {order.upgrades.length !== 0 ? (
                    <>
                      <Text>Upgrade/s:</Text>
                      <Stack>
                        {order.upgrades.map((up, index) => (
                          <HStack key={index}>
                            <MdSettings />
                            <Text>{up.replace(/^(.*)₱(.).*/, "$1")}</Text>
                          </HStack>
                        ))}
                      </Stack>
                    </>
                  ) : (
                    <Text>Upgrade/s: None</Text>
                  )}
                  {order.addons.length !== 0 ? (
                    <>
                      <Text>Addon/s:</Text>
                      <Stack>
                        {order.addons.map((add, index) => (
                          <HStack key={index}>
                            <MdAdd />
                            <Text>{add.replace(/^(.*)₱(.).*/, "$1")}</Text>
                          </HStack>
                        ))}
                      </Stack>
                    </>
                  ) : (
                    <Text>Addon/s: None</Text>
                  )}
                  {order.orderDetails && (
                    <Text>Order Details: {order.orderDetails}</Text>
                  )}
                  {order.images && (
                    <SimpleGrid columns={{ base: 2, xl: 4 }}>
                      {order.images.map((image, index) => (
                        <Image key={index} src={image} boxSize="100px" />
                      ))}
                    </SimpleGrid>
                  )}
                  {order.endDate ? (
                    <Text>
                      Date Finished:{" "}
                      {new Date(order.endDate).toLocaleString([], {
                        // year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {" ( "} {getTimeAfter(order.orderDate, order.endDate)}
                      {" ) "}
                    </Text>
                  ) : null}
                  <Flex direction={{ base: "column", xl: "row" }}>
                    {order.endImage ? (
                      <Image
                        src={order.endImage}
                        boxSize="250px"
                        borderRadius="20px"
                      />
                    ) : null}
                    {order.finalPrice ? (
                      customer.paymentMethod === "Cash on Pickup" ? (
                        <Text>{order.finalPrice}</Text>
                      ) : customer.paymentMethod === "BDO" ? (
                        <Link> {order.finalPrice}</Link>
                      ) : (
                        <Image
                          src={order.finalPrice}
                          boxSize="250px"
                          borderRadius="20px"
                        />
                      )
                    ) : null}
                  </Flex>

                  {order.comment && <Text>{order.comment}</Text>}
                  <ButtonGroup marginTop="20px">
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
                      <Button onClick={onOpen}>Edit Order</Button>
                    ) : null}
                    {order.status === "pickup" ? (
                      <Button onClick={onOpen3}>Pay Your Cake </Button>
                    ) : null}
                    {order.status === "canceled" ? (
                      <Button
                        colorScheme="green"
                        onClick={() => {
                          apiClient.patch(`/order/${order._id}/restore`);
                        }}
                      >
                        Restore
                      </Button>
                    ) : null}
                    {order.status === "decline" && order.isDone === false ? (
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
                    {order.status === "paid" && !order.feedback ? (
                      <Button onClick={onOpen2}>Give Feedback</Button>
                    ) : order.isDone &&
                      order.status !== "canceled" &&
                      order.status !== "decline" ? (
                      <Button onClick={onOpen2}>Edit Feedback</Button>
                    ) : null}
                  </ButtonGroup>
                  <PaymentModal
                    order={order}
                    isOpen={isOpen3}
                    onClose={onClose3}
                  />
                  <FeedbackModal
                    order={order}
                    isOpen={isOpen2}
                    onClose={onClose2}
                  />
                </Box>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Text>No orders found.</Text>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>Hello</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OrderCart;
