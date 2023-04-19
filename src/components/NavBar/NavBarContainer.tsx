import { Flex } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Props {
  children: ReactJSXElement | ReactJSXElement[];
}

const NavBarContainer = ({ children, ...props }: Props) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
