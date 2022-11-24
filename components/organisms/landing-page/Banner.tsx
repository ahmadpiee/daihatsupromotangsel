import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectBanners } from '@store/index'
import { localize } from '@utils/lib/formatter'
import { BsWhatsapp } from 'react-icons/bs'
import { FcAdvertising } from 'react-icons/fc'
import {
  Container,
  Heading,
  Box,
  useMediaQuery,
  Text,
  Flex,
} from '@chakra-ui/react'
import { colors } from '@components/global/Theme'
import { useColorMode } from '@chakra-ui/react'
import Link from 'next/link'

const BannerCarousel = dynamic(
  () => import('@components/organisms/carousel/BannerCarousel'),
)
const AppButton = dynamic(() => import('@components/atoms/buttons/AppButton'))

const AppImageBackground = dynamic(
  () => import('@components/molecules/backgrounds/AppImageBackground'),
)
const BannerSkeleton = dynamic(
  () => import('@components/molecules/skeleton/landing-page/BannerSkeleton'),
  { ssr: false },
)

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
}

const Banner: React.FC = () => {
  const { bannerImages, bannerData, isLoading } = useSelector(selectBanners)
  const { locale } = useRouter()
  const [isLarger1000] = useMediaQuery('(min-width: 1000px)')
  const { colorMode } = useColorMode()
  const router = useRouter()

  return (
    <Container
      mt={{ base: '3.75rem' }}
      p={0}
      maxW="full"
      alignItems="center"
      justifyContent="center"
    >
      {isLoading ? (
        <BannerSkeleton />
      ) : (
        <BannerCarousel
          responsive={responsive}
          banners={bannerImages.map((val: any, i: any) => {
            return (
              <AppImageBackground
                key={i}
                alt="bg-img"
                src={val?.attributes?.url}
                zoom={0}
                componentborderradius={0}
                components={
                  <>
                    <Box
                      bg={colors.white.main}
                      opacity={isLarger1000 ? 0.9 : 1}
                      borderRadius={isLarger1000 ? '2xl' : 0}
                      maxW={isLarger1000 ? 350 : 'full'}
                      p={{ base: '1rem' }}
                      ml={{ base: 0, md: '2rem', lg: '4rem', xl: '6rem' }}
                    >
                      <Flex alignItems="center">
                        <FcAdvertising size={40} />
                        <Heading
                          color={
                            colorMode === 'dark'
                              ? colors.black.main
                              : colors.black.main
                          }
                          fontSize={16}
                          fontWeight="bold"
                          ml="0.5rem"
                        >
                          {bannerData?.title}
                        </Heading>
                      </Flex>
                      <Text
                        color={
                          colorMode === 'dark'
                            ? colors.black.main
                            : colors.black.main
                        }
                      >
                        {bannerData?.description}
                      </Text>
                      <Flex justifyContent="flex-end">
                        <Link href={bannerData?.link} target="_blank">
                          <AppButton
                            mt="1rem"
                            borderRadius="2xl"
                            leftIcon={<BsWhatsapp />}
                          >
                            {localize(locale, 'contactUs')}
                          </AppButton>
                        </Link>
                      </Flex>
                    </Box>
                  </>
                }
                bottom={isLarger1000 ? 150 : 20}
                position={isLarger1000 ? 'fixed' : 'inherit'}
              />
            )
          })}
        />
      )}
    </Container>
  )
}

export default Banner
