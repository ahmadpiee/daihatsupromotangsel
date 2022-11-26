import 'react-medium-image-zoom/dist/styles.css'

import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '@components/global/layout'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectArticleById } from '@store/index'
import {
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
  Avatar,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Zoom from 'react-medium-image-zoom'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { RWebShare } from 'react-web-share'
import { BsFacebook, BsTwitter, BsShareFill } from 'react-icons/bs'
import { colors } from '@components/global/Theme'
import LoadingCircle from '@components/atoms/progress-indicators/LoadingCircle'

const RoutePageDirection = dynamic(
  () => import('@components/molecules/route-pages/index'),
  { ssr: false },
)

const ArticleDetailsTemplate: React.FC = () => {
  const { locale } = useRouter()
  const router = useRouter()
  const { articleById, isLoading } = useSelector(selectArticleById)
  const ShareURL = `${process.env.NEXT_PUBLIC_URL}${router.asPath}`

  return (
    <Layout
      title={articleById?.attributes?.title}
      mt={{ base: '4.75rem' }}
      maxW="container.md"
      // bg="red"
      minH="100vh"
    >
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <Stack gap={2} p={{ base: '0 1rem' }}>
          <Divider />
          <RoutePageDirection
            pagename={localize(locale, 'article')}
            endpoint="/articles"
          />
          <Divider />
          <Heading fontSize="larger">{articleById?.attributes?.title}</Heading>
          <Flex gap={2} alignItems="center">
            <Avatar
              name={articleById?.attributes?.author}
              src={
                articleById?.attributes?.author_avatar?.data?.attributes?.url
              }
            />
            <Text>{articleById?.attributes?.author}</Text>
            <Text>|</Text>
            <Text>{articleById?.attributes?.publish}</Text>
          </Flex>
          <Zoom>
            <Image
              alt={articleById?.attributes?.title}
              src={articleById?.attributes?.thumbnail?.data?.attributes?.url}
            />
          </Zoom>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {articleById?.attributes?.description}
          </ReactMarkdown>
          <Divider />
          {/* share */}
          <Text fontWeight={700}>{localize(locale, 'urlShare')} :</Text>
          <Flex gap={3} alignItems="center">
            <FacebookShareButton
              url={ShareURL}
              title={articleById?.attributes?.title}
            >
              <BsFacebook size={30} color={colors.facebook} />
            </FacebookShareButton>
            <TwitterShareButton
              url={ShareURL}
              title={articleById?.attributes?.title}
            >
              <BsTwitter size={30} color={colors.twitter} />
            </TwitterShareButton>
            <RWebShare
              data={{
                url: ShareURL,
                title: `${localize(locale, 'urlShare')}`,
              }}
              sites={['whatsapp', 'linkedin', 'mail', 'copy']}
            >
              <BsShareFill size={28} style={{ cursor: 'pointer' }} />
            </RWebShare>
          </Flex>
          {/*  */}
          <Divider />
        </Stack>
      )}
    </Layout>
  )
}

export default ArticleDetailsTemplate
