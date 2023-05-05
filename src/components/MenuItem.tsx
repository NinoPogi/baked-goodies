import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

interface Props {
  children: String | ReactNode | ReactNode[];
  link: any;
}

const NavLinks = ({ children, link }: Props) => {
  const match = useMatch(link);
  let theme: HeadingProps = {};

  match &&
    (theme = {
      textDecoration: "underline",
      textDecorationStyle: "wavy",
      textDecorationColor: "teal",
      color: "pink.500",
    });

  return (
    <Link to={link}>
      <Heading fontSize="2xl" {...theme}>
        {children}
      </Heading>
    </Link>
  );
};

export default NavLinks;
