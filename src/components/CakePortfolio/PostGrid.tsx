import { SimpleGrid } from "@chakra-ui/react";
import PostCard from "./PostCard";
import cakePortfolio from "../../data/cakePortfolio";

const PostGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing="20px"
      p="20px"
    >
      {cakePortfolio.map((value) => (
        <PostCard image={value.image}> {value.description}</PostCard>
      ))}
    </SimpleGrid>
  );
};

export default PostGrid;
