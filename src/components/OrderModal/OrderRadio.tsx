import { Box, Stack, useRadio, useRadioGroup, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  onChange: (value: string) => void;
}

const FlavorRadio = (props: Props) => {
  const options = [
    "Vanilla Chiffon",
    "Choco Chiffon",
    "Mocha Chiffon",
    "Ube Chiffon",
    "Choco Moist",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "flavors",
    defaultValue: "Vanilla Chiffon",
    onChange: props.onChange,
  });

  const group = getRootProps();

  return (
    <Stack direction={{ base: "column", lg: "row" }} {...group}>
      {options.map((value) => {
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
export default FlavorRadio;
