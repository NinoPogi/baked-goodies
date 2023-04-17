import {
  Box,
  Stack,
  useRadio,
  useRadioGroup,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import { BaseSyntheticEvent } from "react";

interface Props {
  name: string;
  label: string;
  onChange: (event: any) => void;
  options: string[];
}

const OrderRadio = (props: Props) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: props.onChange,
  });

  const group = getRootProps();

  return (
    <>
      <FormLabel htmlFor="">{props.label}</FormLabel>
      <Stack direction={{ base: "column", lg: "row" }} {...group}>
        {props.options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              <Text m={{ base: "-10px", lg: "-5px", xl: "-2px", "2xl": "0px" }}>
                {value}
              </Text>
            </RadioCard>
          );
        })}
      </Stack>
    </>
  );
};

const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "pink.600",
          color: "white",
          borderColor: "pink.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
export default OrderRadio;
