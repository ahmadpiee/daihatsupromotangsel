import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

export interface MenuItemsButtonProps extends ButtonProps {
  children?: any
  onClick?: () => void
}
const MenuItemsButton: React.FC<MenuItemsButtonProps> = props => {
  const { children, onClick } = props
  return (
    <>
      <Button
        onClick={onClick}
        mt={{ base: 5, md: 0 }}
        mr={6}
        display="block"
        size="xs"
        backgroundColor="transparent"
        {...props}
      >
        {children}
      </Button>
    </>
  )
}

export default MenuItemsButton
