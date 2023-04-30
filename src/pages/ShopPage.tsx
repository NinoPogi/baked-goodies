import { useEffect } from "react";
import { Stack } from "@chakra-ui/react";
import CakeGrid from "../components/ShopPage/CakeGrid";

const ShopPage = () => {
  useEffect(() => {
    document.title = "CakeShop | Baked Goodies by H";
  }, []);

  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <CakeGrid />
    </Stack>
  );
};

export default ShopPage;
