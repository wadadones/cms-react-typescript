import { Flex, Button, Heading, Box, Link, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons"

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>User Management App</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link>users</Link>
          </Box>
          <Link>settings</Link>
        </Flex>
        <IconButton aria-label="menu" icon={<HamburgerIcon />} size="sm" variant="unstyled" display={{ base: "block", md: "none" }} onClick={onOpen}/>
      </Flex>
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
    </>
  )
});
