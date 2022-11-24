import { Flex, Heading, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { FcSupport, FcApproval, FcOvertime } from 'react-icons/fc'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'

const CarsMarquee: React.FC = () => {
  const { colorMode } = useColorMode()
  const { locale } = useRouter()
  return (
    <Marquee
      speed={50}
      gradientColor={colorMode === 'light' ? [218, 218, 219] : [38, 47, 58]}
      gradientWidth={100}
      style={{ margin: '2rem 0' }}
    >
      <Flex p={10} minWidth="max-content" gap="10">
        <Flex alignItems="center">
          <FcApproval size={50} />
          <Heading ml="0.5rem">{localize(locale, 'authorized')}</Heading>
        </Flex>
        <Flex alignItems="center">
          <FcOvertime size={50} />
          <Heading ml="0.5rem">{localize(locale, 'fastApprove')}</Heading>
        </Flex>
        <Flex alignItems="center">
          <FcSupport size={50} />
          <Heading ml="0.5rem">{localize(locale, 'service')}</Heading>
        </Flex>
      </Flex>
    </Marquee>
  )
}

export default CarsMarquee
