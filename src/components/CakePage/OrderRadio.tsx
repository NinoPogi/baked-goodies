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

const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" cursor="pointer">
      <input {...input} />
      <Box
        {...checkbox}
        borderWidth="1px"
        borderRadius="md"
        borderColor="pink.400"
        fontSize="2xl"
        _checked={{
          bg: "pink.400",
          color: "white",
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
  onChange: (value: string) => void;
}

const OrderRadio = ({ radio, onChange }: Props) => {
  const [display, setDisplay] = useState(radio.defaultValue);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: radio.name,
    defaultValue: radio.defaultValue,
    onChange: (value) => {
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

export default OrderRadio;
