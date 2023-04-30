import { Dispatch, SetStateAction, useEffect } from "react";
import { Stack, Link, Heading, Button, Box } from "@chakra-ui/react";
import { Link as ReactLink, useParams } from "react-router-dom";
import CakeCardSkeleton from "../components/ShopPage/CakeCardSkeleton";
import CakeCheckbox from "../components/ProductPage/CakeCheckbox";
import CakeInfoAccordion from "../components/ProductPage/CakeInfoAccordion";
import CakeRadio from "../components/ProductPage/CakeRadio";
import useCakes from "../hooks/useCakes";
import CakeCard from "../components/ShopPage/CakeCard";
import cakes from "../data/cakes";

interface Props {
  onOpen: () => void;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const ProductPage = ({ onOpen, form, setForm }: Props) => {
  const params = useParams();
  const [cake] = cakes.filter((obj) => obj.type === params.type);

  useEffect(() => {
    document.title = `${cake.title} | Baked Goodies by H`;
    setForm({ ...form, type: cake.title });
    cake.radios.map((radio) => {
      setForm((prev: {}) => ({ ...prev, [radio.name]: radio.defaultValue }));
    });
  }, []);

  return (
    <Stack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing="50px"
        justify="center"
      >
        <Box w="100%">
          <Link as={ReactLink} to="/cakeshop">
            <Heading fontSize="2xl">Back to Cake Shop</Heading>
          </Link>
          <Box
            h={{ base: "300px", xl: "500px" }}
            w={{ sm: "280px", md: "385px", xl: "300px" }}
            overflow="auto"
          >
            <Stack direction={{ base: "row", lg: "column" }}>
              {cake.images.map((url) => (
                <CakeCard image={url} key={url} />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box w="100%">
          <Stack>
            <Heading fontSize="5xl">{cake.title.toUpperCase()}</Heading>
            <Heading fontSize="2xl">{`price ${cake.pricing}`}</Heading>
          </Stack>
          <Box>
            {cake.radios.map((radio) => (
              <CakeRadio
                radio={radio}
                key={radio.name}
                onChange={(value) => {
                  setForm({ ...form, [radio.name]: value });
                }}
              />
            ))}
            {cake.checkboxes.map((checkbox) => (
              <CakeCheckbox
                checkbox={checkbox}
                key={checkbox.name}
                onChange={(value) => {
                  setForm({ ...form, [checkbox.name]: value });
                }}
              />
            ))}
          </Box>

          <Button
            colorScheme="pink"
            width="100%"
            p="30px"
            m="30px 0"
            onClick={onOpen}
          >
            OrderYourCakeNow
          </Button>
          <CakeInfoAccordion heading="Cake Information:" info={cake.info} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductPage;