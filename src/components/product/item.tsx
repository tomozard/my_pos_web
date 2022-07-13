import React from "react";
import { Box, Image, Button, Flex } from "@chakra-ui/react";

export const ProductItem: React.FC = () => {
  const property = {
    imageUrl: "https://fs.hut1150.com/pizzas/sf-star_sfst-07072022011812.jpg",
    imageAlt: "ซีฟู้ด สตาร์",
    beds: 3,
    baths: 2,
    title: "ซีฟู้ด สตาร์",
    formattedPrice: "399",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor={"white"}
      boxShadow="md"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="4">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          color="gray.600"
        >
          {property.title}
        </Box>
        <Flex>
          <Box flex={1} color="gray.600">
            {property.formattedPrice}
          </Box>
          <Button colorScheme="red" size="sm">
            Add
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
