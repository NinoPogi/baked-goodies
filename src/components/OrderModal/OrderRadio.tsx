import { Box, Stack, useRadio, useRadioGroup } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setFlavor: Dispatch<SetStateAction<string>>;
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
    defaultValue: "Choco Moist",
    onChange: props.setFlavor,
  });

  const group = getRootProps();

  return (
    <Stack direction={{ base: "column", lg: "row" }} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
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