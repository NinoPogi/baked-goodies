import { Card, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  route: string;
  image: string;
  children: string;
  pricing: string;
}

const CakeCard = ({ route, image, children, pricing }: Props) => {
  return (
    <Link to={route}>
      <Card variant="unstyled" borderRadius="20px" overflow="hidden">
        <Image
          src={image}
          boxSize={{ "1sm": "15em", sm: "21em", md: "17em", xl: "20em" }}
        />
      </Card>
      <Heading textAlign="center" pt="20px " fontSize="lg">
        {children}
      </Heading>
      <Heading textAlign="center" pt="px " fontSize="lg">
        price {pricing}
      </Heading>
    </Link>
  );
};

export default CakeCard;
