import {
  Box,
  Stack,
  useRadio,
  useRadioGroup,
  Text,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { BaseSyntheticEvent } from "react";

interface Props {
  label: string;
  onChange: (event: any) => void;
  options: any[];
}

const OrderRadio = ({ label, onChange, options }: Props) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="">{label}</FormLabel>
        <Stack direction={{ base: "column", lg: "row" }} {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                <Text
                  m={{ base: "-10px", lg: "-5px", xl: "-2px", "2xl": "0px" }}
                >
                  {value}
                </Text>
              </RadioCard>
            );
          })}
        </Stack>
      </FormControl>
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
