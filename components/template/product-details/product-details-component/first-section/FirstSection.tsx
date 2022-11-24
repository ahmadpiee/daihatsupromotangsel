import 'react-multi-carousel/lib/styles.css'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectProductBySlug } from '@store/index'
import dynamic from 'next/dynamic'
import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { CurrencyIDR, localize } from '@utils/lib/formatter'
import { FcInfo, FcDownload } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { colors } from '@components/global/Theme'
import RenderVideoPlayerCar from './RenderVideoPlayerCar'
import Link from 'next/link'

const ImageCarousel = dynamic(
  () => import('@components/organisms/carousel/ImagesCarousel'),
)
const RenderSpecificationCar = dynamic(
  () =>
    import(
      '@components/template/product-details/product-details-component/first-section/RenderSpecificationCar'
    ),
  { ssr: false },
)
const RenderDescriptionCar = dynamic(
  () =>
    import(
      '@components/template/product-details/product-details-component/first-section/RenderDescriptionCar'
    ),
  { ssr: false },
)

const FirstSection: React.FC = () => {
  const { productBySlug, productBySlugImages, productLinkBrosur } =
    useSelector(selectProductBySlug)
  const product = useSelector(selectProductBySlug)

  console.log('PRODUCT AJA', product)
  console.log('PRODUCT BY SLUG', productBySlug)

  const { locale } = useRouter()
  const [isLarger1280] = useMediaQuery('(min-width: 1280px)')

  //
  return (
    <>
      <Flex
        justifyContent="center"
        gap={5}
        boxShadow="md"
        flexDir={isLarger1280 ? 'row' : 'column'}
        // minH="400px"
        p={{
          base: '1.5rem 0',
          md: '1.5rem 2rem',
          lg: '1.5rem 4rem',
          xl: '1.5rem 8rem',
        }}
      >
        <Container maxW="container.md">
          <ImageCarousel
            images={productBySlugImages}
            bg={colors.BlackTopFade}
            opacity={0.65}
          />
          {/* <RenderVideoPlayerCar url={}/> */}
          <Divider m={{ base: '1rem 0' }} />

          <RenderVideoPlayerCar
            url={productBySlug?.attributes?.video_link}
            light={productBySlug?.attributes?.thumbnail?.data?.attributes?.url}
          />
        </Container>
        <Flex gap={3} flexDir="column" p={{ base: '0 2rem' }}>
          <Flex flexDir="column" gap={2} mt={4}>
            <Heading textTransform="capitalize" fontSize={19}>
              {productBySlug?.attributes?.name}
            </Heading>
            <Flex gap={1}>
              <FcInfo size={20} />
              <Heading textTransform="capitalize" fontSize={14}>
                {localize(locale, 'fuel')} : {productBySlug?.attributes?.type}
              </Heading>
            </Flex>
            <Flex gap={2}>
              <Text fontSize={17} fontWeight={700}>
                Rp {CurrencyIDR.format(productBySlug?.attributes?.price)}
              </Text>
              <Text fontSize={14} as="u">
                {localize(locale, 'otrPrice')} {productBySlug?.attributes?.otr}
              </Text>
            </Flex>
          </Flex>
          <Divider />
          {/*  */}
          <RenderDescriptionCar productBySlug={productBySlug} />
          {/*  */}
          <RenderSpecificationCar productBySlug={productBySlug} />
          {/*  */}
          <Flex alignItems="center" mt="20px">
            <Link href={productLinkBrosur} target="_blank">
              <Button gap={2}>
                <FcDownload />
                {localize(locale, 'download')}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default FirstSection
