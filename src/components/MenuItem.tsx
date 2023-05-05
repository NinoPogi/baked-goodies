import { Heading, HeadingProps, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

interface Props {
  children: String | ReactNode | ReactNode[];
  link: any;
}

const NavLinks = ({ children, link }: Props) => {
  const match = useMatch(link);

  let theme: HeadingProps = {};
  const textDecorationColor = useColorModeValue("teal.500", "teal.300");
  const color = useColorModeValue("pink.500", "pink.300");

  match &&
    (theme = {
      textDecoration: "underline",
      textDecorationStyle: "wavy",
      textDecorationColor,
      color,
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
