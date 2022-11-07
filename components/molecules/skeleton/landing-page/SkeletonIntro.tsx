import React from 'react'
import { Grid, GridItem, Skeleton, SkeletonText } from '@chakra-ui/react'
import Image from 'next/image'

const images = [require('@public/assets/images/photo1.JPG')]

const SkeletonIntro: React.FC = () => {
  return (
    <Grid
      h="min-content"
      w="full"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={4}
      pt={{ base: '1rem', md: '3rem', lg: '4rem', xl: '7rem' }}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      {/* prolouge */}
      <GridItem
        rowSpan={3}
        colSpan={{ base: 8, md: 5 }}
        position={{ base: 'relative' }}
        w="full"
      >
        <Grid justifyContent="center" alignItems="center">
          <SkeletonText noOfLines={1} textAlign="center" width="260px" />
        </Grid>
        <br />
        <SkeletonText noOfLines={6} />
        <br />
        <SkeletonText noOfLines={7} />
      </GridItem>
      {/* hero */}
      <GridItem
        style={{ overflow: 'hidden' }}
        rowSpan={3}
        colSpan={{ base: 8, md: 3 }}
        w="full"
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Skeleton>
          <Image src={images[0]} alt="image alt" />
        </Skeleton>
      </GridItem>
    </Grid>
  )
}

export default SkeletonIntro
