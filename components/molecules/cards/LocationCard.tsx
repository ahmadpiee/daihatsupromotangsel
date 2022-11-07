import React from 'react'
import dynamic from 'next/dynamic'
import { Container, ContainerProps } from '@chakra-ui/react'
import { colors } from '@components/global/Theme'
import Image, { StaticImageData } from 'next/image'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { useColorMode } from '@chakra-ui/react'

export interface cardProps extends ContainerProps {
  children?: any
  src?: string | StaticImageData
}

const AppHeadingMd = dynamic(
  () => import('@components/molecules/typographies/AppHeadingMd'),
)

const LocationCard: React.FC<cardProps> = props => {
  const { src } = props
  const { locale } = useRouter()
  const { colorMode } = useColorMode()

  return (
    <Container
      {...props}
      borderRadius="md"
      overflow="hidden"
      p={{ base: '5' }}
      bg={colorMode === 'dark' ? colors.whiteGradient : colors.darkGradient}
      _hover={{
        bgGradient: colors.pinkGradient,
      }}
    >
      <AppHeadingMd
        color={colorMode === 'light' ? colors.white.main : colors.black.main}
      >
        {localize(locale, 'locationInfo')}
      </AppHeadingMd>
      <Image alt="map" src={src} />
    </Container>
  )
}

export default LocationCard
