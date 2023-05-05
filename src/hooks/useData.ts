import { useState, useEffect } from "react";
import { AxiosRequestConfig, AxiosError } from "axios";
import apiClient from "../services/api-client";

const useData = <T>(
  httpMethod: string,
  endpoint: string,
  defaultValue: T,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
  headers?: Record<string, string>
) => {
  const [data, setData] = useState<T>(defaultValue);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const httpFunction =
    httpMethod === "get"
      ? apiClient.get
      : httpMethod === "post"
      ? apiClient.post
      : httpMethod === "put"
      ? apiClient.put
      : apiClient.delete;

  useEffect(
    () => {
      const abortController = new AbortController();

      setLoading(true);

      httpFunction<T>(endpoint, {
        signal: abortController.signal,
        ...requestConfig,
        headers: headers || {},
      })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err: AxiosError) => {
          if (err.message === "Request aborted") return;
          setError(err.message);
          setLoading(false);
        });
      return () => {
        abortController.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, setData, error, isLoading };
};

export default useData;
