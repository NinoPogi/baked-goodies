import { Heading, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";

interface Props {
  children: String | ReactNode | ReactNode[];
  link: any;
}

const NavLinks = ({ children, link }: Props) => {
  return (
    <Link
      as={ReactLink}
      to={link}
      _active={{
        textDecoration: "underline",
      }}
    >
      <Heading fontSize="xl">{children}</Heading>
    </Link>
  );
};

export default NavLinks;
