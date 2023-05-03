import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import useCustomer, { Customer } from "../hooks/useCustomer";
import useOrders, { Order } from "../hooks/useOrders";

export interface CustomerContextInterface {
  customer: Customer;
  setCustomer: Dispatch<SetStateAction<Customer>>;
  orders: Order[];
}

interface Props {
  children: ReactNode;
}

const defaultState = {
  customer: { name: "", _id: "", email: "", phone: "", orders: [] },
  setCustomer: (customer: Customer) => {},
  orders: [
    {
      _id: "",
      orderDate: "",
      promiseDate: "",
      customer: { name: "", _id: "", email: "", phone: "", orders: [] },
      type: "",
      flavor: "",
      shape: "",
      size: "",
      digits: "",
      upgrades: [],
      addons: [],
      orderDetails: "",
      images: [],
      status: "",
      isPaid: "",
      payment: "",
    },
  ],
} as CustomerContextInterface;

export const CustomerContext =
  createContext<CustomerContextInterface>(defaultState);

export default ({ children }: Props) => {
  const { data: customer, setData: setCustomer } = useCustomer({
    ...defaultState.customer,
  });
  const { data: orders } = useOrders(customer);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer, orders }}>
      {children}
    </CustomerContext.Provider>
  );
};
