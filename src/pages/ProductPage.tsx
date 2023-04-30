import { Dispatch, SetStateAction, useEffect } from "react";
import { Stack, Link, Heading, Button, Box } from "@chakra-ui/react";
import { Link as ReactLink, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import CakeCheckbox from "../components/ProductPage/CakeCheckbox";
import CakeInfoAccordion from "../components/ProductPage/CakeInfoAccordion";
import CakeRadio from "../components/ProductPage/CakeRadio";
import useCakes from "../hooks/useCakes";
import CakeCard from "../components/ShopPage/CakeCard";

interface Props {
  onOpen: () => void;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
}

const ProductPage = ({ onOpen, form, setForm }: Props) => {
  const { data, isLoading, error } = useCakes();
  const { handleSubmit, control } = useForm();
  const params = useParams();
  const [cake] = data.filter((obj) => obj.type === params.type);

  useEffect(() => {
    document.title = `${cake.title} | Baked Goodies by H`;
  }, []);

  return (
    <Stack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing="50px"
        justify="center"
      >
        <Box w="100%">
          <Link as={ReactLink} to="/shop">
            <Heading fontSize="2xl">Back to Cake Shop</Heading>
          </Link>
          <Box
            h={{ base: "300px", lg: "625px", xl: "550px" }}
            w={{ sm: "280px", md: "385px", xl: "500px" }}
            overflow="auto"
          >
            <Stack direction={{ base: "row", lg: "column" }}>
              {cake.images.map((url) => (
                <CakeCard
                  image={url}
                  key={url}
                  boxSize={{ sm: "17.1em", lg: "28em" }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box w="100%">
          <Stack>
            <Heading fontSize="5xl">{cake.title.toUpperCase()}</Heading>
            <Heading fontSize="2xl">{`price ${cake.pricing}`}</Heading>
          </Stack>
          <form
            onSubmit={handleSubmit((submit) =>
              setForm({ ...submit, type: cake.title })
            )}
          >
            {cake.radios.map((radio) => (
              <Controller
                name={radio.name}
                defaultValue={radio.defaultValue}
                control={control}
                render={({ field }) => (
                  <CakeRadio radio={radio} key={radio.name} {...field} />
                )}
              />
            ))}
            {cake.checkboxes.map((checkbox) => (
              <Controller
                name={checkbox.name}
                control={control}
                render={({ field }) => (
                  <CakeCheckbox
                    checkbox={checkbox}
                    key={checkbox.name}
                    {...field}
                  />
                )}
              />
            ))}
            <Button
              type="submit"
              colorScheme="pink"
              width="100%"
              p="30px"
              m="30px 0"
              onClick={onOpen}
              borderRadius="0 20px 0 20px"
            >
              OrderYourCakeNow
            </Button>
          </form>

          <CakeInfoAccordion heading="Cake Information:" info={cake.info} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductPage;
