import React from "react";
import {
  Box,
  Image,
  AspectRatio,
  Text,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { ListItem } from "./list_item";
import { IoBagCheckOutline } from "react-icons/io5";
import { Customer } from "./customer";

export const Cart: React.FC = () => {
  return (
    <Box
      maxWidth={"20rem"}
      width={"100%"}
      bg="white"
      bgGradient="linear(red.100 0%, white 25%)"
      //   padding={4}
    >
      <VStack spacing={4} align="stretch" height={"100vh"} padding={4}>
        <Customer />
        <Text
          color={"blackAlpha.700"}
          fontWeight="bold"
          fontSize={20}
          height={"30px"}
        >
          Cart
        </Text>
        <Box
          flex={1}
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
        >
          <VStack spacing={2} align="stretch">
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </VStack>
        </Box>
        <Button
          leftIcon={<IoBagCheckOutline />}
          colorScheme="red"
          height={"40px"}
        >
          Checkout
        </Button>
      </VStack>
    </Box>
  );
};
