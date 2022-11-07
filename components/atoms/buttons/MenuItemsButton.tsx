import React from 'react'
import { Button } from '@chakra-ui/react'

interface ButtonProps {
  children?: any
  onClick?: () => void
}

const MenuItemsButton: React.FC<ButtonProps> = props => {
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
