import { Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  children: String;
  link: any;
}

const NavLinks = ({ children, link }: Props) => {
  return (
    <Link to={link}>
      <Button
        variant={{ xl: "solid" }}
        color="white"
        colorScheme="pink"
        fontWeight="bold"
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavLinks;
