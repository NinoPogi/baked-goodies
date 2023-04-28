import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Stack, Link, Heading } from "@chakra-ui/react";
import { Link as ReactLink, useParams } from "react-router-dom";
import CakeShowcase from "../components/CakePage/CakeShowcase";
import CakeForm from "../components/CakePage/CakeForm";
import CakeRecommend from "../components/CakePage/CakeRecommend";
import api from "../services/api-client";

interface Props {
  onOpen: () => void;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const CakePage = ({ onOpen, form, setForm }: Props) => {
  const params = useParams();
  const [cake, setCake] = useState({
    title: "",
    pricing: "",
    radios: [],
    info: [],
    images: [],
    checkboxes: [],
  });

  useEffect(() => {
    api
      .get(`/cake?type=${params.type}`)
      .then((res) => {
        const response = res.data[0];
        document.title = `${response.title} | Baked Goodies by H`;
        setCake(response);
      })
      .catch((err) => alert(err));
  }, [params]);

  return (
    <Stack spacing="40px">
      <Link as={ReactLink} to="/cakeshop">
        <Heading fontSize="2xl">Back to Cake Shop</Heading>
      </Link>
      <Stack direction={{ base: "column", md: "row" }} spacing="50px">
        <CakeShowcase cake={cake} />
        <CakeForm cake={cake} onOpen={onOpen} form={form} setForm={setForm} />
      </Stack>
      <Heading>Check Other Cakes:</Heading>
      <CakeRecommend cakeType={params.type} />
    </Stack>
  );
};

export default CakePage;
