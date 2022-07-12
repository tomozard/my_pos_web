import React, { useEffect, useState } from "react";
import { Flex, Center, Box, Button } from "@chakra-ui/react";

import { useLiff } from "react-liff";

const Home: React.FC = () => {
  const [displayName, setDisplayName] = useState("");
  const { error, isLoggedIn, isReady, liff } = useLiff();
  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!isReady) return <p>Loading...</p>;

    if (!isLoggedIn) {
      return (
        <Button className="App-button" onClick={() => liff.login()}>
          Login
        </Button>
      );
    }
    return (
      <>
        <Flex direction="column" minH="100vh">
          <Flex color="white" minH="100vh">
            <Box width={72} bg="green.500">
              <p>Welcome to the react-liff demo app, {displayName}!</p>
              <button className="App-button" onClick={liff.logout}>
                Logout
              </button>
            </Box>
            <Box flex="1" bg="blue.500">
              <Center>Box 1</Center>
            </Box>
            <Box width={360} bg="tomato">
              <Center>Box 3</Center>
            </Box>
          </Flex>
        </Flex>
      </>
    );
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
    })();
  }, [liff, isLoggedIn]);

  return <>{showDisplayName()}</>;
};

export default Home;
