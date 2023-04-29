import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const CakeCardSkeleton = () => {
  return (
    <>
      <Card w="300px" borderRadius="20px" overflow="hidden">
        <Skeleton h="250px" />
      </Card>
    </>
  );
};

export default CakeCardSkeleton;
