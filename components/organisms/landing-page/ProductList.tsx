import React from 'react'
import dynamic from 'next/dynamic'
import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'
import { useSelector } from 'react-redux'
import { selectProducts } from '@store/index'

import ProductListCarousel from '@components/organisms/carousel/ProductListCarousel'
// import { colors } from '@components/global/Theme'

const ProductCard = dynamic(
  () => import('@components/molecules/cards/ProductCard'),
)

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
}

const ProductList: React.FC = () => {
  const [isLarger1280] = useMediaQuery('(min-width: 1280px)')
  const { locale } = useRouter()
  // const router = useRouter()
  const allProducts = useSelector(selectProducts)

  return (
    <Box mt={{ base: '1.5rem', xl: '4rem', lg: '3rem', md: '2rem' }}>
      <Flex justifyContent="space-between">
        <Heading
          maxW={isLarger1280 ? 300 : 150}
          fontSize={isLarger1280 ? '2xl' : 'lg'}
        >
          {localize(locale, 'intro')}
        </Heading>
        {/* <Text
          sx={{ cursor: 'pointer' }}
          onClick={() => router.push('/products')}
          fontSize={isLarger1280 ? '2xl' : 'lg'}
          textTransform="capitalize"
          color={colors.blue.light}
          fontWeight={600}
        >
          {localize(locale, 'seeAll')}
        </Text> */}
      </Flex>
      <ProductListCarousel
        responsive={responsive}
        images={allProducts?.products?.map((val: any, i: any) => {
          return (
            <ProductCard
              key={i}
              src={val?.attributes?.thumbnail?.data?.attributes?.url}
              productName={val?.attributes?.name}
              price={val?.attributes?.price.toString()}
              otr={val?.attributes?.otr}
              slug={val?.attributes?.slug}
            />
          )
        })}
      />
    </Box>
  )
}

export default ProductList
