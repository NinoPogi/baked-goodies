import { Box, Image, Stack, Card } from "@chakra-ui/react";
import { Cake } from "../../hooks/useCakes";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  cake: Cake;
}

const CakeShowcase = ({ cake }: Props) => {
  return (
    <Box
      h={{ sm: "230px", md: "335px", xl: "625px", "1xl": "550px" }}
      w={{ sm: "280px", md: "385px", xl: "500px" }}
      overflow="auto"
      borderRadius="20px"
    >
      <Stack direction={{ base: "row", xl: "column" }}>
        {cake?.images.map((url) => (
          <Card key={url} borderRadius="20px" overflow="hidden" flexShrink="0">
            <Image
              src={getCroppedImageUrl(url)}
              boxSize={{ base: "230px", md: "335px", xl: "500px" }}
            />
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default CakeShowcase;
