import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";

interface Cake {
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
    title: "",
    pricing: "",
    radios: [],
    info: [],
    images: [],
    checkboxes: [],
  });

  useEffect(() => {
    apiClient
      .get<FetchCakeResponse>(`/cake?type=${params.type}`)
      .then((res) => {
        const response = res.data[0];
        setCake(response);
      })
      .catch((err) => alert(err));
  }, []);

  return { cake, params };
};

export default useCakes;
