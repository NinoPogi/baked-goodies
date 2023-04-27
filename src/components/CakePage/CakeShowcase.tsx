import { Box, Card, Image, Stack } from "@chakra-ui/react";

interface Props {
  cake: { images: string[] };
}

const CakeShowcase = ({ cake }: Props) => {
  return (
    <Box
      h={{ base: "300px", md: "500px" }}
      w={{ "1sm": "280px", sm: "385px", md: "300px" }}
      borderRadius="20px"
      overflow="auto"
    >
      <Stack direction={{ base: "row", md: "column" }}>
        {cake.images.map((url) => (
          <Card
            variant="unstyled"
            borderRadius="20px"
            overflow="hidden"
            flexShrink="0"
          >
            <Image src={url} boxSize="300px" />
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default CakeShowcase;
