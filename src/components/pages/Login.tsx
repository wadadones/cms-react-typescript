import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChangeEvent, FC, memo, useState } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useAuth } from "../../hooks/useAuth"

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState('');

  const { login, loading } = useAuth();
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onClickLogin = () => login(userId)
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">Login page</Heading>
        <Divider my={4}/>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="user id" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton onClick={onClickLogin} disabled={userId === ''} loading={loading}>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
});
