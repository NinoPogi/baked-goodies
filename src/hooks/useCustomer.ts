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
  customer: Customer;
  orderDate: string;
  promiseDate: string;
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
  comment: string;
  status: string;
  price: string;
  finalPrice: string;
  feedback: {
    rating: number;
    comment: string;
  };
  endDate: string;
  endImage: string;
  isRush: boolean;
  isEdited: boolean;
  isDone: boolean;
}

export interface CustomerOrdersData {
  customer: Customer;
  orders: Order[];
}

const useCustomer = (defaultValue: CustomerOrdersData) =>
  useData<CustomerOrdersData>("/customer", defaultValue);

export default useCustomer;
