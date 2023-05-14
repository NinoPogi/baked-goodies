import useData from "./useData";

export interface Customer {
  _id: string;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  paymentMethod: string;
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
  bundle: string;
  upgrades: string[];
  addons: string[];
  dedication: string;
  orderDetails: string;
  images: string[];
  status: string;
  endImage: string;
  isPaid: string;
}

export interface CustomerOrdersData {
  customer: Customer;
  orders: Order[];
}

const useCustomer = (defaultValue: CustomerOrdersData) =>
  useData<CustomerOrdersData>("get", "/customer", defaultValue);

export default useCustomer;
