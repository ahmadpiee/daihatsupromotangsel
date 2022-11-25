import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface Props {
  productBySlug?: any
}

const RenderDescriptionCar: React.FC<Props> = props => {
  const { productBySlug } = props
  const { locale } = useRouter()
  return (
    <Box>
      <Flex alignItems="center" gap={1} mb="10px">
        <Text fontSize={18} fontWeight={600}>
          {localize(locale, 'description')} :
        </Text>
      </Flex>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {productBySlug?.attributes?.description}
      </ReactMarkdown>
    </Box>
  )
}

export default RenderDescriptionCar
