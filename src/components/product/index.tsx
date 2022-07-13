import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProductItem } from "./item";

export const Product: React.FC = () => {
  return (
    <Box
      padding={4}
      overflow="auto"
      __css={{
        "&::-webkit-scrollbar": {
          w: "2",
        },
        "&::-webkit-scrollbar-track": {
          w: "6",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10",
          bg: `gray.300`,
        },
      }}
      height={"100vh"}
    >
      <SimpleGrid columns={3} spacing={4}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </SimpleGrid>
    </Box>
  );
};
