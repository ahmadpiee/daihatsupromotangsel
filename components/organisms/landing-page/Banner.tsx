import React from 'react'
import FirstBanner from '@public/assets/images/banner1.png'
import SecondBanner from '@public/assets/images/banner2.png'
import Zoom from 'react-medium-image-zoom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const Banners = [
  {
    id: 1,
    img: FirstBanner,
    alt: 'banner',
  },
  {
    id: 2,
    img: SecondBanner,
    alt: 'banner',
  },
  {
    id: 3,
    img: FirstBanner,
    alt: 'banner',
  },
]

const Banner = () => {
  return (
    <Box mt={{ base: '5px' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Banners.map(data => (
          <SwiperSlide key={data.id}>
            <Zoom>
              <Image
                // placeholder="blur"
                // loading="lazy"
                alt={data.alt}
                src={data.img}
              />
            </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Banner
