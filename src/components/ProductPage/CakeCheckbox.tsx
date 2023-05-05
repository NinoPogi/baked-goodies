import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  useCheckbox,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { Control } from "react-hook-form";
import { CakeFormValues } from "../../pages/ProductPage";

const Checkbox = (props: any) => {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" cursor="pointer">
      <input {...input} />
      <Box
        {...checkbox}
        borderWidth="1px"
        fontSize="2xl"
        borderColor="pink.400"
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
  checkbox: {
    name: string;
    options: { value: string; description: string }[];
  };
  onChange: (value: string[]) => void;
  control: Control<CakeFormValues, any>;
}

const CakeCheckbox = ({ checkbox, onChange, control }: Props) => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    onChange: onChange,
  });

  return (
    <Stack>
      <HStack>
        <Heading fontSize="2xl">SELECT {checkbox.name.toUpperCase()}:</Heading>
        <Heading fontSize="2xl">{value.sort().join(", ")}</Heading>
      </HStack>
      <SimpleGrid columns={2} spacing="10px">
        {checkbox.options.map((option) => {
          const checkbox = getCheckboxProps({ value: option.value });
          return (
            <Checkbox key={option.value} {...checkbox}>
              {option.description}
            </Checkbox>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};

export default CakeCheckbox;
