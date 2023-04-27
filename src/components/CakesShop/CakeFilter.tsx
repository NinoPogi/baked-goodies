import { useState } from "react";
import { Box, RadioGroup, Stack, Heading, Radio, Link } from "@chakra-ui/react";

interface Props {
  onChange: (event: string) => void;
}

const FilterButton = ({ onChange }: Props) => {
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
        <RadioGroup defaultValue="" onChange={onChange}>
          <Stack spacing={5}>
            <Heading fontSize="xl">CAKE TYPE</Heading>
            <Radio colorScheme="pink" value="">
              All Cakes
            </Radio>
            <Radio colorScheme="pink" value="?type=cupcake">
              Cupcakes
            </Radio>
            <Radio colorScheme="pink" value="?type=bento">
              Bento Cakes
            </Radio>
            <Radio colorScheme="pink" value="?type=tier">
              Tier Cakes
            </Radio>
            <Radio colorScheme="pink" value="?type=custom">
              Custom Cakes
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
};

export default FilterButton;
