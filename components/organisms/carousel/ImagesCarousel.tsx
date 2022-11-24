import React from 'react'
import Carousel from 'react-multi-carousel'
import {
  Box,
  BoxProps,
  Text,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react'
import { colors } from '@components/global/Theme'
import dynamic from 'next/dynamic'

interface ImagesCarouselProps extends BoxProps {
  images?: any
}
const AppImageBackground = dynamic(
  () => import('@components/molecules/backgrounds/AppImageBackground'),
)

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
}

const ImagesCarousel: React.FC<ImagesCarouselProps> = props => {
  const { images } = props
  const [isLarger1000] = useMediaQuery('(min-width: 1000px)')
  const { colorMode } = useColorMode()

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {images?.map((val: any, i: any) => {
        return (
          <AppImageBackground
            key={i}
            src={val?.image?.data?.attributes?.url}
            alt="product-images"
            componentborderradius={0}
            components={
              <Box
                bg={colors.whiteGradient}
                opacity={0.7}
                p={`${isLarger1000}  ` ? '1rem' : '0'}
                // ml={{ base: 0, md: '0.5rem' }}
                {...props}
                w="8xl"
              >
                <Text
                  color={
                    colorMode === 'dark' ? colors.white.main : colors.white.main
                  }
                  fontSize={16}
                  fontWeight={700}
                >
                  {val?.title}
                </Text>
              </Box>
            }
            bottom={0}
            zoom={1}
            position={isLarger1000 ? 'absolute' : 'absolute'}
          />
        )
      })}
    </Carousel>
  )
}

export default ImagesCarousel
