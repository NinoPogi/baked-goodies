import { useEffect, useState } from "react";
import { Stack, Link, Heading } from "@chakra-ui/react";
import { Link as ReactLink, useParams } from "react-router-dom";
import CakeShowcase from "../components/CakePage/CakeShowcase";
import CakeForm from "../components/CakePage/CakeForm";
import CakeRecommend from "../components/CakePage/CakeRecommend";
import api from "../services/api-client";

const CakePage = () => {
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
    document.title = `${params.type} | Baked Goodies by H`;
    api
      .get(`/cake?title=${params.type}`)
      .then((res) => setCake(res.data[0]))
      .catch((err) => alert(err));
  }, [params]);

  return (
    <Stack spacing="40px">
      <Link as={ReactLink} to="/cakes">
        <Heading fontSize="2xl">Back to Cake Shop</Heading>
      </Link>
      <Stack direction={{ base: "column", md: "row" }} spacing="50px">
        <CakeShowcase cake={cake} />
        <CakeForm cake={cake} />
      </Stack>
      <Heading>Check Other Cakes:</Heading>
      <CakeRecommend cakeName={params.type} />
    </Stack>
  );
};

export default CakePage;
