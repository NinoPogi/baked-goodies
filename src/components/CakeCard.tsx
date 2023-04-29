import { Box, Card, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface RequiredProps {
  image: string;
}

interface OptionalProps {
  route: string;
  children: string;
  pricing: string;
}

interface Props extends RequiredProps, OptionalProps {}

const defaultProps: OptionalProps = {
  route: "",
  children: "",
  pricing: "",
};

const CakeCard = ({ route, image, children, pricing }: Props) => {
  return (
    <Box flexShrink="0">
      <Link to={route}>
        <Card variant="unstyled" borderRadius="20px" overflow="hidden">
          <Image
            src={image}
            boxSize={{ "1sm": "15em", sm: "21em", md: "17em", xl: "20em" }}
          />
        </Card>
        <Heading textAlign="center" pt="5px " fontSize="lg">
          {children}
        </Heading>
        <Heading textAlign="center" pt="px " fontSize="lg">
          {pricing}
        </Heading>
      </Link>
    </Box>
  );
};

CakeCard.defaultProps = defaultProps;

export default CakeCard;
