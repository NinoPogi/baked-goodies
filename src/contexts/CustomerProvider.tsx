import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import useCustomer, { CustomerOrdersData } from "../hooks/useCustomer";

interface CustomerContextInterface {
  customer: CustomerOrdersData["customer"];
  setData: Dispatch<SetStateAction<CustomerOrdersData>>;
  orders: CustomerOrdersData["orders"];
}

interface Props {
  children: ReactNode;
}

const defaultState: CustomerContextInterface = {
  customer: { _id: "", name: "", email: "", phone: "", orders: [] },
  orders: [],
  setData: () => {},
};

export const CustomerContext =
  createContext<CustomerContextInterface>(defaultState);

export default function CustomerProvider({ children }: Props) {
  const { data, setData } = useCustomer({
    customer: { ...defaultState.customer },
    orders: [],
  });
  return (
    <CustomerContext.Provider
      value={{ customer: data.customer, orders: data.orders, setData }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
