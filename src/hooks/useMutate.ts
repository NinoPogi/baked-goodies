import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import apiClient from "./../services/api-client";
import { AxiosError } from "axios";

const useMutate = (endpoint: string) => {
  const [serverError, setServerError] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation((data: any) => apiClient.post(endpoint, data), {
    onSuccess: (response) => {
      queryClient.setQueryData("/customer", response.data);
      sessionStorage.setItem("isLoggedIn", "true");
    },
    onError: (error) => {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        setServerError(axiosError.response.data as string);
      }
      console.error(`Error while posting data to ${endpoint}: `, error);
      throw error;
    },
  });

  return { mutation, serverError };
};

export default useMutate;
