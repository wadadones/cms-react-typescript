import { Wrap, WrapItem, Box, Stack, Image, Text, Spinner, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks"
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard"
import { UserDetailModal } from "../organisms/user/UserDetailModal"
import { useAllUsers } from "../../hooks/useAllUsers"
import { useSelectUsers } from "../../hooks/useSelectUsers"
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onSelectUser, selectedUser } = useSelectUsers();
  const { loginUser } = useLoginUser();
  console.log(loginUser)
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen});
  }, []);
  return (
    <>
      { loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} >
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/photos/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      ) }
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  )
});
