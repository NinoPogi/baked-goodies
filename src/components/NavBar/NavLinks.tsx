import { Heading, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link as={ReactLink} to="/">
        <Heading fontSize="2xl">Home</Heading>
      </Link>
      <Link as={ReactLink} to="/cakes">
        <Heading fontSize="2xl">PriceList</Heading>
      </Link>
    </>
  );
};

export default NavLinks;
