import 'react-multi-carousel/lib/styles.css'

import React from 'react'
import Carousel from 'react-multi-carousel'

interface ProductListCarouselProps {
  images?: any
  responsive?: any
}

const ProductListCarousel: React.FC<ProductListCarouselProps> = props => {
  const { images, responsive } = props
  return (
    <Carousel
      ssr
      responsive={responsive}
      className="image-item"
      draggable
      swipeable
    >
      {images}
    </Carousel>
  )
}

export default ProductListCarousel
