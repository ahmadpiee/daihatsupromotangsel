import 'react-multi-carousel/lib/styles.css'

import React from 'react'
import Carousel from 'react-multi-carousel'

interface Props {
  banners?: any
  responsive?: any
}

const BannerCarousel: React.FC<Props> = props => {
  const { banners, responsive } = props
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={4000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
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
      {...props}
    >
      {banners}
    </Carousel>
  )
}

export default BannerCarousel
