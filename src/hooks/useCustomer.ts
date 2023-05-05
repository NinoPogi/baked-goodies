import useData from "./useData";

export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

export interface Order {
  _id: string;
  orderDate: string;
  promiseDate: string;
  customer: Customer;
  type: string;
  flavor: string;
  shape: string;
  size: string;
  digits: string;
  upgrades: string[];
  addons: string[];
  orderDetails: string;
  images: string[];
  status: string;
  isPaid: string;
  payment: string;
}

export interface CustomerOrdersData {
  customer: Customer;
  orders: Order[];
}

const useCustomer = (defaultValue: CustomerOrdersData) =>
  useData<CustomerOrdersData>("get", "/customer", defaultValue);

export default useCustomer;
