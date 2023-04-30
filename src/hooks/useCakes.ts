import { Params, useParams } from "react-router-dom";
import useData from "./useData";

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

const useCakes = () => {
  const params = useParams();
  return useData<Cake>("/cake", { params: { ...params } }, [params]);
};
export default useCakes;
