import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  ImageProps,
  ResponsiveValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import getCroppedImageUrl from "../../services/image-url";

interface RequiredProps {
  image: string;
}

interface OptionalProps {
  route: string;
  children: string;
  pricing: string;
  boxSize: {};
}

interface Props extends RequiredProps, OptionalProps {}
const defaultProps: OptionalProps = {
  route: "",
  children: "",
  pricing: "",
  boxSize: { base: "normal" },
};

const CakeCard = ({ route, image, children, pricing, boxSize }: Props) => {
  return (
    <Box flexShrink="0" bg="pink">
      <Link to={route} role="group">
        <Card
          shadow="none"
          bg="transparent"
          p={{ base: "0", md: "8px" }}
          // _groupHover={{
          //   p: "4px",
          // }}
        >
          <CardBody p={{ base: "10px", md: "0px" }}>
            <Image src={getCroppedImageUrl(image)} boxSize={{ ...boxSize }} />
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
