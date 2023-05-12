import { useState } from "react";
import {
  Box,
  FormControl,
  SimpleGrid,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { Control, UseFormWatch } from "react-hook-form";
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
    options: string[];
    defaultValue: string;
  };
  onChange: (value: keyof CakeFormValues) => void;
  watch: UseFormWatch<CakeFormValues>;
}

const CakeRadio = ({ radio, onChange, watch }: Props) => {
  const [display, setDisplay] = useState(radio.defaultValue);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: radio.name,
    defaultValue: radio.defaultValue,
    onChange: onChange,
  });
  const group = getRootProps();
  return (
    <FormControl
    // isDisabled={watch(radio.name as keyof CakeFormValues) ? false : true}
    >
      {/* <FormLabel fontSize="2xl">SELECT {radio.name.toUpperCase()}:</FormLabel> */}
      {/* <Heading fontSize="2xl">{display.toUpperCase()}</Heading> */}
      <SimpleGrid columns={2} spacing="35px" {...group}>
        {radio.options.map((option, index) => {
          const radio = getRadioProps({ value: option });
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
              <RadioCard {...radio}>{option.replace(/₱.*/, "")}</RadioCard>
            </Box>
          );
        })}
      </SimpleGrid>
    </FormControl>
  );
};

export default CakeRadio;
