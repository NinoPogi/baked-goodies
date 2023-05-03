import { useState, useEffect } from "react";
import { AxiosRequestConfig, AxiosError } from "axios";
import apiClient from "../services/api-client";

/**
 * Custom hook for fetching data from an API endpoint.
 *
 * @template T - Type of data to be fetched.
 * @param {string} endpoint - API endpoint to fetch data from.
 * @param {T} defaultValue - Default value for data.
 * @param {AxiosRequestConfig} [requestConfig] - Optional Axios request configuration.
 * @param {any[]} [deps] - Optional dependencies for useEffect hook.
 * @param {Object} [headers] - Optional headers to pass with the API request.
 * @returns {Object} - Object containing fetched data, error message, and loading status.
 */

const useData = <T>(
  httpMethod: string,
  endpoint: string,
  defaultValue: T,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
  headers?: Record<string, string>
) => {
  // Define state variables for data, error, and loading status
  const [data, setData] = useState<T>(defaultValue);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  // Determine which API request method to use based on the given `httpMethod` parameter
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
      // Create an AbortController to allow the fetch request to be cancelled if needed
      const abortController = new AbortController();

      setLoading(true);
      // Make the API request using the selected method and the given endpoint and request configuration
      httpFunction<T>(endpoint, {
        signal: abortController.signal,
        ...requestConfig,
        headers: headers || {}, // Add the optional headers to the request if they are provided
      })
        .then((res) => {
          // If the request was successful, update the state variables accordingly
          setData(res.data);
          setLoading(false);
        })
        .catch((err: AxiosError) => {
          // If the request encountered an error, update the error message and loading status
          if (err.message === "Request aborted") return; // If the error was due to the request being cancelled, do nothing
          setError(err.message);
          setLoading(false);
        });

      // Cleanup function to abort fetch request if component unmounts or useEffect is re-triggered
      return () => {
        abortController.abort();
      };
    },
    deps ? [...deps] : [] // Re-run the effect if any of the optional dependencies change
  );

  // Return an object containing the data, error message, and loading status for the API request
  return { data, setData, error, isLoading };
};

export default useData;
