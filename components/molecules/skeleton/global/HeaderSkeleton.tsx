import React from 'react'
import { Skeleton, Flex } from '@chakra-ui/react'
import { colors } from '@components/global/Theme'
import { useColorMode } from '@chakra-ui/react'

const HeaderSkeleton: React.FC = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      as="header"
      position="fixed"
      zIndex={100000}
      w="full"
      bg={colorMode === 'light' ? colors.whiteGradient : colors.darkGradient}
      color={colorMode === 'light' ? colors.black.light : colors.pinkGradient}
      p={{ base: '1rem' }}
      boxShadow="md"
      minWidth="max-content"
      justifyContent="space-between"
      alignItems="center"
      gap="2"
    >
      <Skeleton height="25px" w="100px" />
      <Skeleton height="25px" w="100px" />
    </Flex>
  )
}

export default HeaderSkeleton
