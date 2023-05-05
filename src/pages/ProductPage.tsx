import { useEffect, useState } from "react";
import { Stack, Link, Heading, Button, Box, Input } from "@chakra-ui/react";
import { Link as ReactLink, useParams } from "react-router-dom";
import { useForm, Controller, FieldValues } from "react-hook-form";
import CakeCheckbox from "../components/ProductPage/CakeCheckbox";
import CakeInfoAccordion from "../components/ProductPage/CakeInfoAccordion";
import CakeRadio from "../components/ProductPage/CakeRadio";
import useCakes from "../hooks/useCakes";
import CakeCard from "../components/ShopPage/CakeCard";
import apiClient from "../services/api-client";

const ProductPage = () => {
  const params = useParams();
  const { data } = useCakes();
  const [cake] = data.filter((obj) => obj.type === params.type);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = `${cake?.title} | Baked Goodies by H`;
  }, []);

  const handleOrder = (submit: FieldValues) => {
    apiClient.post("/order", submit);
  };

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
              {cake?.images.map((url) => (
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
          <form onSubmit={handleSubmit(handleOrder)}>
            <Stack>
              <Heading fontSize="5xl">{cake?.title.toUpperCase()}</Heading>
              <Heading fontSize="2xl">{`price ${cake?.pricing}`}</Heading>
              <Input display="none" value={cake?.title} {...register("type")} />
            </Stack>
            <Heading fontSize="2xl">SELECT PROMISE DATE:</Heading>
            <Input
              borderRadius="0"
              borderColor="pink.500"
              bg="pink.400"
              color="white"
              fontSize="xl"
              _hover={{}}
              type="date"
              {...register("promiseDate", {
                required: true,
                validate: (value) => {
                  const currentDate = new Date();
                  currentDate.setDate(currentDate.getDate() + 2);
                  const inputDate = new Date(value);
                  return (
                    inputDate >= currentDate ||
                    "Date Must Be After 2 Days From Now"
                  );
                },
              })}
            />
            {errors.promiseDate && errors.promiseDate.type === "required" && (
              <p>This field is required</p>
            )}
            {errors.promiseDate && errors.promiseDate.type === "validate" && (
              <p>{errors.promiseDate.message?.toString()}</p>
            )}

            {cake?.radios.map((radio) => (
              <Controller
                key={radio.name}
                name={radio.name}
                defaultValue={radio.defaultValue}
                control={control}
                render={({ field: { onChange } }) => (
                  <CakeRadio radio={radio} onChange={onChange} />
                )}
              />
            ))}
            {cake?.checkboxes.map((checkbox) => (
              <Controller
                key={checkbox.name}
                name={checkbox.name}
                control={control}
                render={({ field: { onChange } }) => (
                  <CakeCheckbox checkbox={checkbox} onChange={onChange} />
                )}
              />
            ))}
            <Button
              type="submit"
              colorScheme="pink"
              width="100%"
              p="30px"
              m="30px 0"
              borderRadius="0 20px 0 20px"
            >
              ORDER
            </Button>
          </form>

          <CakeInfoAccordion heading="Cake Information:" info={cake?.info} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductPage;
