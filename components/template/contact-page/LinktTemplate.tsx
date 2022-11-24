import React from 'react'
import { Box, Divider, Flex, Text, useColorMode } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectLinks } from '@store/index'
import Image from 'next/image'
import { colors } from '@components/global/Theme'
import Link from 'next/link'

const LinktTemplate: React.FC = () => {
  const Links = useSelector(selectLinks)
  console.log('LINK', Links)
  const { colorMode } = useColorMode()

  return (
    <>
      <Divider mt={{ base: '1rem' }} />
      {Links?.links.map((val: any, i: any) => {
        return (
          <Box key={i} mt={{ base: '2rem' }}>
            <Link href={val?.attributes?.link} target="_blank">
              <Flex
                bg={colors.whiteGradient}
                alignItems="center"
                justifyContent="center"
                p={{ base: '1rem' }}
                borderRadius="100px"
                boxShadow="xl"
                gap={5}
              >
                <Image
                  alt="logo"
                  src={val?.attributes?.logo?.data?.attributes?.url}
                  width={40}
                  height={40}
                />
                <Text
                  fontSize={18}
                  fontWeight={600}
                  textTransform="capitalize"
                  color={
                    colorMode === 'light'
                      ? colors.black.main
                      : colors.black.main
                  }
                >
                  {val?.attributes?.name}
                </Text>
              </Flex>
            </Link>
          </Box>
        )
      })}
    </>
  )
}

export default LinktTemplate
