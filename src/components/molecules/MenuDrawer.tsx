import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { FC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button w="100%" onClick={onClickHome}>Top</Button>
            <Button w="100%" onClick={onClickUserManagement}>Users</Button>
            <Button w="100%" onClick={onClickSetting}>Settings</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
})
