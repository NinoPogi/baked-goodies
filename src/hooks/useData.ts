import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchResponse<T> extends Array<T> {}

const useData = <T>(
  endpoint: string,
  // httpMethod: string = "get",
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // const httpFunction =
  //   httpMethod === "get"
  //     ? apiClient.get
  //     : httpMethod === "post"
  //     ? apiClient.post
  //     : httpMethod === "put"
  //     ? apiClient.put
  //     : apiClient.delete;

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, setData, error, isLoading };
};

export default useData;
