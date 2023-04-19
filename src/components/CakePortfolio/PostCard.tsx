import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  image: string;
  children: string[];
}

const PostCards = ({ children, image }: Props) => {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Image objectFit="cover" src={image} w="560px" h="250px" />
      <CardBody>
        <Heading fontSize="1xl">{children}</Heading>
      </CardBody>
    </Card>
  );
};

export default PostCards;
