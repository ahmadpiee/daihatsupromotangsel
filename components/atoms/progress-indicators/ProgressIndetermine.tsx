import React from 'react'
import { Progress, ProgressProps } from '@chakra-ui/react'

const ProgressIndetermine: React.FC<ProgressProps> = props => {
  return <Progress size="xs" isIndeterminate {...props} />
}

export default ProgressIndetermine
