import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { FC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button w="100%">Top</Button>
            <Button w="100%">Users</Button>
            <Button w="100%">Settings</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
})
