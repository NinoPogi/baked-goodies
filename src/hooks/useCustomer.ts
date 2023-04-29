import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchCustomerResponse extends Customer {}
interface FetchOrderResponse extends Array<Order> {}

const useCustomer = () => {
  const [customer, setCustomer] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    orders: [""],
  });
  const [orders, setOrders] = useState<Order[] | undefined>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchCustomerResponse>("/customer", { signal: controller.signal })
      .then((res) => {
        setCustomer(res.data);
        const email = res.data.email;
        if (res.data.orders.length !== 0)
          return apiClient.get<FetchOrderResponse>(
            `/order/?customer.email=${email}`
          );
      })
      .then((res) => setOrders(res?.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        if (err.response.status === 401) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { customer, setCustomer, orders, error };
};

export default useCustomer;
