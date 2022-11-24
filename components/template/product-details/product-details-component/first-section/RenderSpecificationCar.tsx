import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface Props {
  productBySlug?: any
}

const RenderSpecificationCar: React.FC<Props> = props => {
  const { productBySlug } = props
  return (
    <>
      {productBySlug?.attributes?.specifications.map((val: any) => {
        return (
          <Accordion key={val?.id} allowToggle={true} allowMultiple={false}>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontSize={17}>{val?.title}</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel p={{ base: '1rem 2rem' }}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {val?.content}
                </ReactMarkdown>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )
      })}
    </>
  )
}

export default RenderSpecificationCar
