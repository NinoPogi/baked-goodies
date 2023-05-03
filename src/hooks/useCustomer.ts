import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

const useCustomer = (defaultValue: Customer) =>
  useData<Customer>("get", "/customer", defaultValue);
// {
//   const [customer, setCustomer] = useState({
//     _id: "",
//     name: "",
//     email: "",
//     phone: "",
//     orders: [""],
//   });
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);

//     apiClient
//       .get<FetchCustomerResponse>("/customer", { signal: controller.signal })
//       .then((res) => {
//         setCustomer(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         if (err.response.status === 401) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { customer, setCustomer, error, isLoading };
// };

export default useCustomer;
