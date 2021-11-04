import { Wrap, WrapItem, Box, Stack, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { UserCard } from "../organisms/user/UserCard"

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }} >
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/photos/random" userName="don" fullName="dondon"/>
      </WrapItem>
    </Wrap>
  )
});
