import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Customer } from "./useCustomer";

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

interface FetchOrderResponse extends Array<Order> {}

const useCustomer = (customer: Customer) => {
  const [orders, setOrders] = useState<Order[] | undefined>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchOrderResponse>(`/order?customer.email=${customer.email}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setOrders(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        if (err.response.status === 401) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { orders, error, isLoading };
};

export default useCustomer;
