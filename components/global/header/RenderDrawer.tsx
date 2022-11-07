import {
  DrawerProps,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Box,
} from '@chakra-ui/react'
import React from 'react'

export interface RenderDrawerProps extends DrawerProps {
  color?: string
  bg?: string
}

const RenderDrawer: React.FC<RenderDrawerProps> = props => {
  const { onClose, children, color, bg } = props
  return (
    <Drawer {...props}>
      <DrawerOverlay />
      <DrawerContent color={color} bg={bg}>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <Stack spacing="24px">
            <Box onClick={onClose}>{children}</Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default RenderDrawer
