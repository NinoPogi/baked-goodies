import {
  Box,
  FormControl,
  FormLabel,
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
  checkbox: {
    name: string;
    options: string[];
  };
  onChange: (value: string[]) => void;
  control: Control<CakeFormValues, any>;
}

const CakeCheckbox = ({ checkbox, onChange, control }: Props) => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    onChange: onChange,
  });

  return (
    <FormControl>
      <SimpleGrid columns={2} spacing="35px">
        {checkbox.options.map((option, index) => {
          const checkbox = getCheckboxProps({ value: option });
          return (
            <Box
              key={index}
              minW={{ base: "100%", md: "50%" }}
              maxW={{ base: "100%", md: "50%" }}
              minH="50px"
              maxH="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Checkbox {...checkbox}>{option.replace(/₱.*/, "")}</Checkbox>
            </Box>
          );
        })}
      </SimpleGrid>
    </FormControl>
  );
};

export default CakeCheckbox;
