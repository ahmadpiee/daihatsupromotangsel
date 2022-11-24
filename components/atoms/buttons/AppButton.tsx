import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

export interface AppButtonProps extends ButtonProps {
  children?: any
}

const AppButton: React.FC<AppButtonProps> = props => {
  const { children } = props

  return (
    <Button colorScheme="whatsapp" {...props}>
      {children}
    </Button>
  )
}

export default AppButton
