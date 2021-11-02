import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { FC, memo } from "react";

export const Login: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">Login page</Heading>
        <Divider my={4}/>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="user id" />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>Login</Button>
        </Stack>
      </Box>
    </Flex>
  )
});
