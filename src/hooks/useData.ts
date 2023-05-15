import { useState, useEffect } from "react";
import { AxiosRequestConfig, AxiosError } from "axios";
import apiClient from "../services/api-client";

const useData = <T>(
  endpoint: string,
  defaultValue: T,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
  headers?: Record<string, string>
) => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(
    () => {
      const abortController = new AbortController();

      apiClient
        .get<T>(endpoint, {
          signal: abortController.signal,
          ...requestConfig,
          headers: headers || {},
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err: AxiosError) => {
          if (err.message === "Request aborted") return;
        });
      return () => {
        abortController.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, setData };
};

export default useData;
