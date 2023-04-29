import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Cake {
  _id: string;
  route: string;
  title: string;
  pricing: string;
  radios: {
    name: string;
    options: { value: string; description: string }[];
    defaultValue: string;
  }[];
  checkboxes: {
    name: string;
    options: { value: string; description: string }[];
  }[];
  images: string[];
  info: string[];
}

interface FetchCakeResponse extends Array<Cake> {}

const useCakes = () => {
  const params = useParams();
  const [cake, setCake] = useState<Cake>({
    _id: "",
    route: "",
    title: "",
    pricing: "",
    radios: [],
    info: [],
    images: [],
    checkboxes: [],
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchCakeResponse>(`/cake?type=${params.type}`, {
        signal: controller.signal,
      })
      .then((res) => {
        const response = res.data[0];
        setCake(response);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });
  }, []);

  return { cake, params, error, isLoading };
};

export default useCakes;
