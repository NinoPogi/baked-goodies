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
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Input,
} from "@chakra-ui/react";
import { BsArrowRight, BsCalendarEvent, BsCalendarCheck } from "react-icons/bs";
import { GiChemicalDrop, GiCakeSlice } from "react-icons/gi";
import { BiIdCard } from "react-icons/bi";
import { TfiRuler } from "react-icons/tfi";
import { MdSettings, MdAdd } from "react-icons/md";
import { IoShapesOutline } from "react-icons/io5";
import apiClient from "../../services/api-client";
import { Order } from "../../hooks/useCustomer";
import { CustomerContext } from "../../contexts/CustomerProvider";

interface Props {
  orders: Order[];
  children: string;
}

const OrderCart = ({ orders, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { customer } = useContext(CustomerContext);
  const [expandedOrderId, setExpandedOrderId] = useState<string>("");
  const bgAccordion = useColorModeValue("pink.50", "gray.800");
  const payment = new FormData();

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
      : `${hoursDiff} hours from now`;
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
                  {order.flavor && (
                    <HStack>
                      <GiChemicalDrop />
                      <Text> {order.flavor}</Text>
                    </HStack>
                  )}
                  {order.shape && (
                    <HStack>
                      <IoShapesOutline />
                      <Text>{order.shape}</Text>
                    </HStack>
                  )}

                  {order.digits && <Text>Digits: {order.digits}</Text>}
                  {order.bundle && <Text>Bundle: {order.bundle}</Text>}
                  {order.upgrades.length !== 0 ? (
                    <>
                      <Text>Upgrade/s:</Text>
                      <Stack>
                        {order.upgrades.map((up, index) => (
                          <HStack key={index}>
                            <MdSettings />
                            <Text>{up}</Text>
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
                            <Text>{add}</Text>
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

                  {order.finalPrice ? (
                    customer.paymentMethod === "Cash on Pickup" ? (
                      <Text>{order.finalPrice}</Text>
                    ) : (
                      <Image
                        src={order.finalPrice}
                        boxSize="250px"
                        borderRadius="20px"
                      />
                    )
                  ) : null}
                  {order.endImage ? (
                    <Image
                      src={order.endImage}
                      boxSize="250px"
                      borderRadius="20px"
                    />
                  ) : null}
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
                      <>
                        <Text>Upload Proof of Payment:</Text>
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          onClick={(e: BaseSyntheticEvent) => {
                            const file = e.target.files[0];
                            payment.append("imageUpload", file);
                            apiClient.post("/upload", payment).then((res) =>
                              apiClient.put(`/order/server/${order._id}`, {
                                paymentImage: res.data[0],
                                status: "paid",
                              })
                            );
                          }}
                        />
                      </>
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
                    {order.status === "paid" ? (
                      <Button isDisabled>Feedback</Button>
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
      <Modal isOpen={isOpen} onClose={onClose}>
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
