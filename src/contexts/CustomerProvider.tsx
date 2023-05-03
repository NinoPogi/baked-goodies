import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import useCustomer, { Customer } from "../hooks/useCustomer";

export interface CustomerContextInterface {
  customer: Customer;
  setCustomer: Dispatch<SetStateAction<Customer>>;
}

interface Props {
  children: ReactNode;
}

const defaultState = {
  customer: { name: "", _id: "", email: "", phone: "", orders: [] },
  setCustomer: (customer: Customer) => {},
} as CustomerContextInterface;

export const CustomerContext =
  createContext<CustomerContextInterface>(defaultState);

export default ({ children }: Props) => {
  const { data, error } = useCustomer();
  const [customer, setCustomer] = useState({ ...data[0], name: "" });

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
