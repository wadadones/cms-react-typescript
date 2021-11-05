import { FC, memo, ReactNode } from "react"
import { Button } from "@chakra-ui/button"
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type Props = {
  id: number
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void; 
}

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }} onClick={() => onClick(id)}>
      <Stack textAlign="center">
        <Image boxSize="160px" borderRadius="full" src={imageUrl} alt={userName} m="auto"></Image>
        <Text fontSize="large" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  );
})
