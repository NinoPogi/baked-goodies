import { Dispatch, SetStateAction, useEffect } from "react";
import { Stack, Link, Heading, Button, Box } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import CakeRadio from "../components/CakeRadio";
import CakeCheckbox from "../components/CakeCheckbox";
import CakeInfoAccordion from "../components/CakeInfoAccordion";
import CakeRecommend from "../components/CakeRecommend";
import CakeCard from "../components/CakeCard";
import useCakes from "../hooks/useCakes";
import CakeCardSkeleton from "../components/CakeCardSkeleton";

interface Props {
  onOpen: () => void;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const CakePage = ({ onOpen, form, setForm }: Props) => {
  const { cake, params, isLoading } = useCakes();
  const skeletons = [1, 2, 3, 4];

  useEffect(() => {
    document.title = `${cake.title} | Baked Goodies by H`;
    setForm({ ...form, type: cake.title });
    cake.radios.map((radio) => {
      setForm((prev: {}) => ({ ...prev, [radio.name]: radio.defaultValue }));
    });
  }, [cake]);

  return (
    <Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="50px"
        justify="center"
      >
        <Box>
          <Link as={ReactLink} to="/cakeshop">
            <Heading fontSize="2xl">Back to Cake Shop</Heading>
          </Link>
          <Box
            h={{ base: "300px", md: "500px" }}
            w={{ "1sm": "280px", sm: "385px", md: "300px" }}
            borderRadius="20px"
            overflow="auto"
          >
            <Stack direction={{ base: "row", md: "column" }}>
              {skeletons.map(
                (skeleton) => isLoading && <CakeCardSkeleton key={skeleton} />
              )}
              {cake.images.map((url) => (
                <CakeCard image={url} key={url} />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box>
          <Stack>
            <Heading fontSize="5xl">{cake.title.toUpperCase()}</Heading>
            <Heading fontSize="2xl">{`price ${cake.pricing}`}</Heading>
          </Stack>
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

          <Button
            colorScheme="pink"
            width="170px"
            p="30px"
            m="30px 0"
            onClick={onOpen}
          >
            OrderYourCakeNow
          </Button>
          <CakeInfoAccordion heading="Cake Information:" info={cake.info} />
        </Box>
      </Stack>
      <Heading>Check Other Cakes:</Heading>
      <CakeRecommend type={`/${params.type}`} />
    </Stack>
  );
};

export default CakePage;
