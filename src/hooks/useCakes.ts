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
    options: string[];
    defaultValue: string;
  }[];
  checkboxes: {
    name: string;
    options: string[];
  }[];
  images: string[];
  info: string[];
  album: string;
}

const useCakes = () => ({ data: cakes, isLoading: false, error: null });
export default useCakes;
