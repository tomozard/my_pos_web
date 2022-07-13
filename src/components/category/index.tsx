import React from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

export const Category: React.FC = () => {
  return (
    <HStack spacing={4}>
      <Button colorScheme="red" size="md">
        All
      </Button>
      <Button colorScheme="red" size="md" variant="outline">
        Promotions
      </Button>

      <Button colorScheme="red" size="md" variant="outline">
        Pizzas
      </Button>
      <Button colorScheme="red" size="md" variant="outline">
        Pizza Taco
      </Button>
      <Button colorScheme="red" size="md" variant="outline">
        Pastas
      </Button>
      <Button colorScheme="red" size="md" variant="outline">
        Wings
      </Button>
      <Button colorScheme="red" size="md" variant="outline">
        Appetizers
      </Button>
    </HStack>
  );
};
