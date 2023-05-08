import { useState } from "react";
import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { Control } from "react-hook-form";
import { CakeFormValues } from "../../pages/ProductPage";

const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" cursor="pointer">
      <input {...input} />
      <Box
        {...checkbox}
        fontSize="2xl"
        borderRadius="10px"
        _checked={{
          color: "gray.700",
          bg: "white",
          shadow: "md",
        }}
        p="5px 10px"
      >
        {props.children}
      </Box>
    </Box>
  );
};

interface Props {
  radio: {
    name: string;
    options: { value: string; description: string }[];
    defaultValue: string;
  };
  onChange: (value: keyof CakeFormValues) => void;
  control: Control<CakeFormValues, any>;
}

const CakeRadio = ({ radio, onChange, control }: Props) => {
  const [display, setDisplay] = useState(radio.defaultValue);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: radio.name,
    // defaultValue: radio.defaultValue,
    onChange: (value: keyof CakeFormValues) => {
      onChange(value);
      setDisplay(value);
    },
  });

  const group = getRootProps();

  return (
    <Stack>
      <HStack>
        <Heading fontSize="2xl">SELECT {radio.name.toUpperCase()}:</Heading>
        <Heading fontSize="2xl">{display.toUpperCase()}</Heading>
      </HStack>
      <SimpleGrid columns={2} spacing="10px" {...group}>
        {radio.options.map((option) => {
          const radio = getRadioProps({ value: option.value });
          return (
            <RadioCard key={option.value} {...radio}>
              {option.description}
            </RadioCard>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};

export default CakeRadio;
