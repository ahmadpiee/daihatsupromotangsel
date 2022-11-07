import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

const AppHeadingMd: React.FC<HeadingProps> = props => {
  const { children } = props
  return (
    <Heading
      {...props}
      mb={{
        base: '15',
        xl: '12.5',
        lg: '11.5',
        md: '10',
        sm: '8.5',
      }}
      size="md"
    >
      {children}
    </Heading>
  )
}

export default AppHeadingMd
