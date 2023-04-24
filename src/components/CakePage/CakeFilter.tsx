import { useState } from "react";
import { Box, RadioGroup, Stack, Heading, Radio, Link } from "@chakra-ui/react";

const FilterButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Link display={{ base: "inline", md: "none" }} onClick={toggle}>
        <Heading fontSize="xl">filter & sort</Heading>
      </Link>
      <Box display={{ base: open ? "block" : "none", md: "block" }}>
        <RadioGroup>
          <Stack spacing={5}>
            <Heading fontSize="xl">CAKE TYPE</Heading>
            <Radio colorScheme="pink" value="cupcakes">
              Cupcakes
            </Radio>
            <Radio colorScheme="pink" value="bento">
              Bento Cakes
            </Radio>
            <Radio colorScheme="pink" value="tier">
              Tier Cakes
            </Radio>
            <Radio colorScheme="pink" value="custom">
              Custom Cakes
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
};

export default FilterButton;
