import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
} from "@chakra-ui/react";

import { useLiff } from "react-liff";
import { Cart } from "components/cart";
import { Nav } from "components/nav";
import { Product } from "components/product";

const Home: React.FC = () => {
  const [displayName, setDisplayName] = useState("");
  const { error, isLoggedIn, isReady, liff } = useLiff();
  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!isReady) return <p>Loading...</p>;

    // if (!isLoggedIn) {
    //   return (
    //     <Button className="App-button" onClick={() => liff.login()}>
    //       Login
    //     </Button>
    //   );
    // }
    return (
      <>
        <Flex direction="column" minH="100vh">
          <Flex color="white" minH="100vh" bg="blackAlpha.100">
            <Box width={"6rem"} bg="white">
              {/* <p>Welcome to the react-liff demo app, {displayName}!</p>
              <button className="App-button" onClick={liff.logout}>
                Logout
              </button> */}
              <Nav />
            </Box>
            <Box flex="1">
              <Product />
            </Box>
            <Cart />
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
