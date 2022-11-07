import React from 'react'
import { Grid, GridProps } from '@chakra-ui/react'

const SectionGrid: React.FC<GridProps> = props => {
  const { children } = props
  return (
    <Grid
      h="min-content"
      w="full"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={4}
      pt={{ base: '3.5rem', md: '4.5rem', lg: '5rem', xl: '7.5rem' }}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      {...props}
    >
      {children}
    </Grid>
  )
}

export default SectionGrid
