import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'

const BannerSkeleton = () => {
  return (
    <Skeleton>
      <Box maxW="full" height="580px"></Box>
    </Skeleton>
  )
}

export default BannerSkeleton
