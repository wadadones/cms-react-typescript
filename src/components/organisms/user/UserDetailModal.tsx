import { Wrap, WrapItem, Box, Stack, Image, Text, Spinner, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { FC, memo } from "react";
import { User } from "../../../types/api/user";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>User Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>name</FormLabel>
              <Input value={user?.username} isReadOnly />
              <FormLabel>full name</FormLabel>
              <Input value={user?.name} isReadOnly />
              <FormLabel>mail</FormLabel>
              <Input value={user?.email} isReadOnly />
              <FormLabel>phone</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
})
