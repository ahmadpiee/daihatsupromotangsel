import React from 'react'
import { CircularProgress, CircularProgressProps, Flex } from '@chakra-ui/react'

const LoadingCircle: React.FC<CircularProgressProps> = props => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <CircularProgress isIndeterminate color="green.300" {...props} />
    </Flex>
  )
}

export default LoadingCircle
