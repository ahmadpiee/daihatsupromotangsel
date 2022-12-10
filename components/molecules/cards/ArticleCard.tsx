import React from 'react'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { colors } from '@components/global/Theme'

interface ArticleCardProps extends CardProps {
  src?: string
  alt?: string
  title?: string
  description?: string
  id?: any
  publishdate?: any
  author?: string
}

const ArticleCard: React.FC<ArticleCardProps> = props => {
  const { src, alt, title, description, id, publishdate, author } = props
  const { locale } = useRouter()
  const router = useRouter()
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="elevated"
      bg={colors.white.main}
      {...props}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={src}
        alt={alt}
      />
      <Stack>
        <CardBody>
          <Heading color={colors.black.main} size="sm">
            {title}
          </Heading>
          <Box noOfLines={3} m={{ base: '0.75rem 0' }} textColor="black">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {description}
            </ReactMarkdown>
          </Box>
          <Button
            onClick={() => router.push(`/articles/${id}`)}
            variant="link"
            colorScheme="blue"
          >
            {localize(locale, 'articleDetails')}
          </Button>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex>
            <Text color="GrayText" fontSize="smaller">
              {author}
            </Text>
            <Text m={{ base: '0 0.25rem' }} color="GrayText" fontSize="smaller">
              |
            </Text>
            <Text color="GrayText" fontSize="smaller">
              {publishdate}
            </Text>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default ArticleCard
