import React from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'

const SectionContainer: React.FC<ContainerProps> = props => {
  const { children } = props

  return (
    <Container
      maxW="container.lg"
      pt={{ base: '1rem', sm: '2rem', md: '3.5rem', lg: '4.5rem', xl: '8rem' }}
      pl={0}
      pr={0}
      {...props}
    >
      {children}
    </Container>
  )
}

export default SectionContainer
