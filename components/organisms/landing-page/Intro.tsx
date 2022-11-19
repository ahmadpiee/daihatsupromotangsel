import React from 'react'
import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import { AppHeadingMd } from '@components/molecules/typographies'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'

const ProductCard = dynamic(
  () => import('@components/molecules/cards/ProductCard'),
)

const Intro = () => {
  const { locale } = useRouter()
  return (
    <Box mt={{ base: '1rem', xl: '6rem', lg: '4rem', md: '2rem' }}>
      <AppHeadingMd>{localize(locale, 'intro')}</AppHeadingMd>
      <Flex justifyContent="center" alignItems="center">
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="40px">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Intro
