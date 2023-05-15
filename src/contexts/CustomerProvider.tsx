import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { AxiosProgressEvent } from "axios";
import useCustomer, {
  Customer,
  CustomerOrdersData,
  Order,
} from "../hooks/useCustomer";
import { Channel } from "pusher-js";
import usePusher from "../hooks/usePusher";
import { useToast } from "@chakra-ui/react";

interface CustomerContextInterface {
  customer: CustomerOrdersData["customer"];
  setData: Dispatch<SetStateAction<CustomerOrdersData>>;
  orders: CustomerOrdersData["orders"];
  progress: number;
  handleProgress: (event: AxiosProgressEvent) => void;
  // channel: Channel | null;
}

interface Props {
  children: ReactNode;
}

const defaultState: CustomerContextInterface = {
  customer: {
    _id: "",
    avatar: "",
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
  },
  orders: [],
  setData: () => {},
  progress: 0,
  handleProgress: () => 0,
};

export const CustomerContext =
  createContext<CustomerContextInterface>(defaultState);

export default function CustomerProvider({ children }: Props) {
  const [progress, setProgress] = useState(defaultState.progress);
  const { data, setData } = useCustomer({
    customer: defaultState.customer,
    orders: defaultState.orders,
  });

  useEffect(() => {
    if (data.customer._id) sessionStorage.setItem("isLoggedIn", "true");
  }, [data.customer._id]);

  const handleProgress = (event: AxiosProgressEvent) => {
    const progress = Math.round((event.loaded / event.total!) * 100);
    setProgress(progress);
  };

  // const { pusher, channel } = usePusher(data.customer._id);
  // const toast = useToast();

  // useEffect(() => {
  //   channel.bind("customer-event", (data: any) => {
  //     setData(data);
  //   });

  //   channel.bind("order-event", ({ type, payload }: any) => {
  //     const orders = [...data.orders];

  //     if (type === "create") {
  //       orders.push(payload);
  //       toast({
  //         title: "New order created!",
  //         description: `Order ID: ${payload._id}`,
  //         status: "success",
  //         duration: 1000,
  //         isClosable: true,
  //       });
  //     } else if (type === "update") {
  //       const index = orders.findIndex((o) => o._id === payload._id);
  //       if (index !== -1) {
  //         orders[index] = payload;
  //         toast({
  //           title: "Order updated!",
  //           description: `Order ID: ${payload._id}`,
  //           status: "info",
  //           duration: 3000,
  //           isClosable: true,
  //         });
  //       }
  //     } else if (type === "delete") {
  //       const index = orders.findIndex((o) => o._id === payload._id);
  //       if (index !== -1) {
  //         orders.splice(index, 1);
  //       }
  //     }

  //     setData({ customer: data.customer, orders });

  //     return () => {
  //       pusher.unsubscribe(`customer-${data.customer._id}`);
  //       pusher.disconnect();
  //     };
  //   });
  // }, [channel, data, setData, toast]);

  return (
    <CustomerContext.Provider
      value={{
        customer: data.customer,
        orders: data.orders,
        setData,
        progress,
        handleProgress,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
