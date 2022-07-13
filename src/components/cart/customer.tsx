import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLiff } from "react-liff";
import { MdLogin, MdLogout } from "react-icons/md";

export const Customer: React.FC = () => {
  const [displayName, setDisplayName] = useState("Guest");
  const [pictureUrl, setPictureUrl] = useState("");

  const { error, isLoggedIn, isReady, liff } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) {
        setDisplayName("Guest");
        setPictureUrl("");
    } else {
      (async () => {
        const profile = await liff.getProfile();
        setDisplayName(profile.displayName);
        setPictureUrl(profile.pictureUrl);
      })();
    }
  }, [liff, isLoggedIn]);

  return (
    <Box boxShadow="md" rounded="xl" bg="white" padding={4}>
      <HStack spacing="4">
        <Box flex="1">
          <AspectRatio maxW="72px" ratio={1}>
            {/* <Image src={pictureUrl ?? ""} alt={displayName} borderRadius="xl" /> */}
            <Avatar name={displayName} src={pictureUrl} />
          </AspectRatio>
        </Box>
        <Box>
          <Text color={"blackAlpha.700"} fontWeight="bold" mb={0}>
            {displayName}
          </Text>
          <Text color={"blackAlpha.700"} fontWeight="bold" mb={0} fontSize={22}>
            Total 1,200
          </Text>
        </Box>
        <Divider
          orientation="vertical"
          height={"50px"}
          borderColor={"gray.600"}
        />
        <Box flex="1">
          {isLoggedIn ? (
            <Button
              colorScheme="red"
              variant="link"
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
              variant="link"
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

          {/* <Button colorScheme="red" variant="ghost" height={"auto"} padding={0}>
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
          </Button> */}
        </Box>
      </HStack>
    </Box>
  );
};
