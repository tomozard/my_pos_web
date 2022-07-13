import React, { useEffect, useState } from "react";
import { useLiff } from "react-liff";
import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { AiFillShop, AiOutlineHistory } from "react-icons/ai";
import { MdLogin, MdLogout } from "react-icons/md";

export const Nav: React.FC = () => {
  // const [displayName, setDisplayName] = useState("Guest");
  // const [pictureUrl, setPictureUrl] = useState("");

  const { isLoggedIn, liff } = useLiff();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     setDisplayName("Guest");
  //     setPictureUrl("");
  //   } else {
  //     (async () => {
  //       const profile = await liff.getProfile();
  //       setDisplayName(profile.displayName);
  //       setPictureUrl(profile.pictureUrl);
  //     })();
  //   }
  // }, [liff, isLoggedIn]);
  return (
    <VStack spacing={4} align="stretch" height={"100vh"} padding={4}>
      <Box>
        <Image
          objectFit="cover"
          src="https://scontent-kut2-2.xx.fbcdn.net/v/t31.18172-8/28954537_1584299971624224_6006036649745850318_o.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHz7bZMTi849L0tnLwitRF1hZLF0tkk0pOFksXS2STSk3Y786B4UCsZT2Z4zEsWFiQ&_nc_ohc=PIHyoNJViOYAX_Emsu3&_nc_ht=scontent-kut2-2.xx&oh=00_AT_1isNfPMYOGmderxq4DIXVv2P9108831uI9T3dZ4tJZg&oe=62F4925C"
          alt=""
        />
      </Box>
      <Button colorScheme="red" variant="solid" height={"auto"} padding={2}>
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
      <Button colorScheme="red" variant="ghost" height={"auto"} padding={2}>
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
      {isLoggedIn ? (
        <Button
          colorScheme="red"
          variant="ghost"
          height={"auto"}
          padding={0}
          onClick={() => liff.logout()}
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
      ) : (
        <Button
          colorScheme="red"
          variant="ghost"
          height={"auto"}
          padding={0}
          onClick={() => liff.login()}
        >
          <VStack align="stretch">
            <Box>
              <Center>
                <MdLogin />
              </Center>
            </Box>
            <Box>
              <Center>
                <Text marginBottom={0} fontSize={14}>
                  Login
                </Text>
              </Center>
            </Box>
          </VStack>
        </Button>
      )}
    </VStack>
  );
};
