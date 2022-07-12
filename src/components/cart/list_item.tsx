import React from "react";
import {
  Box,
  Image,
  AspectRatio,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

export const ListItem: React.FC = () => {
  return (
    <Box rounded="xl">
      <HStack spacing="4">
        <Box width={"48px"}>
          <AspectRatio maxW="48px" ratio={1}>
            <Image
              src="https://fs.hut1150.com/pizzas/sf-star_sfst-07072022011812.jpg"
              alt="Dan Abramov"
              borderRadius="xl"
            />
          </AspectRatio>
        </Box>
        <Box flex="1">
          <Text color={"blackAlpha.700"} fontWeight="bold" m={0}>
            Seafood Star
          </Text>
          <Text color={"blackAlpha.700"} m={0} fontSize={16}>
            399
          </Text>
        </Box>
        {/* <Box>
          <VStack
            spacing={0}
            align="stretch"
          >
            <Box>
              <Button size='xs' variant='outline' colorScheme='yellow'>
                <HiOutlinePlus />
              </Button>
            </Box>
            <Box>
              <Button size='xs' variant='outline' colorScheme='yellow'>
                <HiOutlineMinus />
              </Button>
            </Box>
          </VStack>
        </Box> */}
        <HStack spacing={1}>
          <Button size="sm" colorScheme="yellow">
            <HiOutlineMinus />
          </Button>
          <Text
            color={"blackAlpha.700"}
            m={0}
            fontSize={18}
            fontWeight="bold"
            w={"28px"}
            textAlign="center"
          >
            1
          </Text>
          <Button size="sm" colorScheme="yellow">
            <HiOutlinePlus />
          </Button>
          {/* <Button colorScheme="yellow" size="sm">
            <DeleteIcon />
          </Button> */}
        </HStack>
      </HStack>
    </Box>
  );
};
