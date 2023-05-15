import { useQuery } from "react-query";
import { AxiosRequestConfig, AxiosError } from "axios";
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";

const useData = <T>(
  endpoint: string,
  defaultValue: T,
  requestConfig?: AxiosRequestConfig,
  headers?: Record<string, string>
) => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    setData(defaultValue);
  }, []);

  const {
    data: queryData,
    isLoading,
    error,
    status,
  } = useQuery<T>(
    endpoint,
    async () => {
      const response = await apiClient.get<T>(endpoint, {
        ...requestConfig,
        headers: headers || {},
      });

      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      retry: 3,
      onError: (error: unknown) => {
        const axiosError = error as AxiosError;

        if (axiosError.message === "Request aborted") return;
      },
    }
  );

  useEffect(() => {
    if (queryData) {
      setData(queryData as T);
    }
  }, [queryData]);

  return { data, isLoading, error, status };
};

export default useData;
