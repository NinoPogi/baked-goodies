import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import getCroppedImageUrl from "../../services/image-url";

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
      <Link to={route} role="group">
        <Card
          shadow="none"
          p={{ base: "0", md: "8px" }}
          _groupHover={{
            p: "6px",
          }}
        >
          <CardBody p={{ base: "10px", md: "0px" }}>
            <Image
              src={getCroppedImageUrl(image)}
              boxSize={{ "1sm": "15em", sm: "21em", md: "17em", xl: "20em" }}
              // borderRadius="20px"
            />
            <Heading
              textAlign="center"
              pt="5px "
              fontSize="xl"
              _groupHover={{
                textDecoration: "underline",
              }}
            >
              {children}
            </Heading>
            <Heading textAlign="center" pt="px " fontSize="lg">
              {pricing}
            </Heading>
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
};

CakeCard.defaultProps = defaultProps;

export default CakeCard;
