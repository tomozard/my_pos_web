import React from "react";
import { Box, Image, Button, Flex } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";

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
        <Flex mt="1">
          <Box flex={1}>
            <Box
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              color="gray.600"
            >
              {property.title}
            </Box>
            <Box color="gray.600">{property.formattedPrice}</Box>
          </Box>
          <Button
            leftIcon={<MdOutlineShoppingCart />}
            colorScheme="red"
            variant="solid"
          >
            Add
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
