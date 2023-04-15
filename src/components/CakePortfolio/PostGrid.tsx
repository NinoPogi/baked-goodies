import { SimpleGrid } from "@chakra-ui/react";
import PostCard from "./PostCard";

const PostGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing="20px"
      p="20px"
    >
      {Array(10)
        .fill(0)
        .map((x) => (
          <PostCard />
        ))}
    </SimpleGrid>
  );
};

export default PostGrid;
