import { Box } from '@chakra-ui/react'
import { AppHeadingMd } from '@components/molecules/typographies'
import React from 'react'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'

const Intro = () => {
  const { locale } = useRouter()
  return (
    <Box mt={{ base: '1rem', xl: '6rem', lg: '4rem', md: '2rem' }}>
      <AppHeadingMd textAlign="center">
        {localize(locale, 'intro')}
      </AppHeadingMd>
    </Box>
  )
}

export default Intro
