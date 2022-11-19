import React from 'react'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'
import { colors } from '@components/global/Theme'

export interface ProductCardProps extends BoxProps {
  children?: any
}

const ProductCard: React.FC<ProductCardProps> = props => {
  const { children } = props

  return (
    <Box
      {...props}
      p={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
      shadow="md"
      borderWidth="1px"
      background={colors.whiteGradient}
      maxW={{ base: '250px' }}
      alignSelf="center"
    >
      <Heading fontSize="xl">Save Money</Heading>
      <Text mt={4}>
        You deserve good things. With a whooping 10-15% interest rate per annum,
        grow your savings on your own terms with our completely automated
        process
      </Text>
      {children}
    </Box>
  )
}

export default ProductCard
