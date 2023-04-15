import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

const PostCards = () => {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Image
        src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/337709537_765132761769080_7876214707891305100_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHrtwKyB8PioQ7DsJpAXrXwk6Z9UTGxVjOTpn1RMbFWM7KJsEO7AWrJujLbsCkAuJHafmJnnF_qatkDQ3cGji-h&_nc_ohc=1SSxMLTdFLMAX9MVVB7&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdRJEMIP3orQQRXR2S_RnBiPMUK-K7CA5Pa9A_kPEeWxDA&oe=645C9329"
        w="560px"
        h="250px"
      />
      <CardBody>
        <Heading fontSize="2xl">This is a Sample Cake</Heading>
        <Text>This is a Sample Description.</Text>
      </CardBody>
    </Card>
  );
};

export default PostCards;
