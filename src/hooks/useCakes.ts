import cakes from "../data/cakes";

export interface Cake {
  _id: {
    $oid: string;
  };
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

const useCakes = () => ({ data: cakes, isLoading: false, error: null });
export default useCakes;
