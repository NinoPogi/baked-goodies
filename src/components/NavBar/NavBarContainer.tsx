import { Box, Flex } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Props {
  children: ReactJSXElement | ReactJSXElement[];
}

const NavBarContainer = ({ children, ...props }: Props) => {
  return (
    <Box
      as={Flex}
      borderRadius="lg"
      boxShadow="md"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={{ base: 8, md: 12 }}
      bg={["pink.400", "pink.400", "pink.400", "transparent"]}
      {...props}
    >
      {children}
    </Box>
  );
};

export default NavBarContainer;
