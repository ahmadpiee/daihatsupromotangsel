import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

const AppHeadingMd: React.FC<HeadingProps> = props => {
  const { children } = props
  return (
    <Heading
      {...props}
      mb={{
        base: '1rem',
        xl: '2rem',
        lg: '1.75rem',
        md: '1.5rem',
        sm: '1.25rem',
      }}
      size="md"
    >
      {children}
    </Heading>
  )
}

export default AppHeadingMd
