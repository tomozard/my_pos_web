import React from "react";
import { Flex, Center } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { Button } from "components";

const Login: React.FC = () => {
  return (
    <Flex direction="column">
      <Center minH="100vh">
        <RouteLink to="/">
          <Button>Login Test</Button>
        </RouteLink>
      </Center>
    </Flex>
  );
};

export default Login;
