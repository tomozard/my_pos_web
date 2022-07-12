import React from "react";
import { Flex, Center, Box } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Flex color="white" minH="100vh">
        <Box width={72} bg="green.500">
          <Center>Box 1</Center>
        </Box>
        <Box flex="1" bg="blue.500">
          <Center>Box 1</Center>
        </Box>
        <Box width={360} bg="tomato">
          <Center>Box 3</Center>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
