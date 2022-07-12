import React, { useEffect, useState } from "react";
import {
  Flex,
  Center,
  Box,
  VStack,
  Button,
  Text,
  Spacer,
  Image,
} from "@chakra-ui/react";

import { useLiff } from "react-liff";
import { Cart } from "components/cart";
import { AiFillShop, AiOutlineHistory } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

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
              <VStack spacing={4} align="stretch" height={"100vh"} padding={4}>
                <Box>
                  <Image
                    objectFit="cover"
                    src="https://scontent-kut2-2.xx.fbcdn.net/v/t31.18172-8/28954537_1584299971624224_6006036649745850318_o.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHz7bZMTi849L0tnLwitRF1hZLF0tkk0pOFksXS2STSk3Y786B4UCsZT2Z4zEsWFiQ&_nc_ohc=PIHyoNJViOYAX_Emsu3&_nc_ht=scontent-kut2-2.xx&oh=00_AT_1isNfPMYOGmderxq4DIXVv2P9108831uI9T3dZ4tJZg&oe=62F4925C"
                    alt=""
                  />
                </Box>
                <Button
                  colorScheme="red"
                  variant="solid"
                  height={"auto"}
                  padding={2}
                >
                  <VStack align="stretch">
                    <Box>
                      <Center>
                        <AiFillShop />
                      </Center>
                    </Box>
                    <Box>
                      <Center>
                        <Text marginBottom={0} fontSize={14}>
                          Shop
                        </Text>
                      </Center>
                    </Box>
                  </VStack>
                </Button>
                <Button
                  colorScheme="red"
                  variant="ghost"
                  height={"auto"}
                  padding={2}
                >
                  <VStack align="stretch">
                    <Box>
                      <Center>
                        <AiOutlineHistory />
                      </Center>
                    </Box>
                    <Box>
                      <Center>
                        <Text marginBottom={0} fontSize={14}>
                          History
                        </Text>
                      </Center>
                    </Box>
                  </VStack>
                </Button>
                <Spacer />
                <Button
                  colorScheme="red"
                  variant="ghost"
                  height={"auto"}
                  padding={2}
                >
                  <VStack align="stretch">
                    <Box>
                      <Center>
                        <MdLogout />
                      </Center>
                    </Box>
                    <Box>
                      <Center>
                        <Text marginBottom={0} fontSize={14}>
                          Logout
                        </Text>
                      </Center>
                    </Box>
                  </VStack>
                </Button>
              </VStack>
            </Box>
            <Box flex="1">
              <Center>Box 1</Center>
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
