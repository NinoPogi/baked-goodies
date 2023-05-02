import { Customer } from "./useCustomer";
import useData from "./useData";

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

const useOrder = (customer: Customer) =>
  useData<Order>(
    "/order",

    {
      params: {
        "customer.email": customer?.email,
      },
    },
    [customer]
  );

export default useOrder;
