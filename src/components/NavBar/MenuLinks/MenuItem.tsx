import { Heading, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

interface Props {
  children: String;
  link: any;
}

const NavLinks = ({ children, link }: Props) => {
  return (
    <Link as={ReactLink} to={link}>
      <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
        {children}
      </Heading>
    </Link>
  );
};

export default NavLinks;
