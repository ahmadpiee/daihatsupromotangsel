import React from 'react'
import { Container, Flex, Text } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import AppButton from '@components/atoms/buttons/AppButton'

const UnderDevelopment: React.FC = () => {
  const { locale } = useRouter()
  const router = useRouter()
  return (
    <Container mt="8rem">
      <Flex
        gap={3}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text>{localize(locale, 'underDev')}</Text>
        <AppButton onClick={() => router.replace('/')}>
          {localize(locale, 'goBack')}
        </AppButton>
      </Flex>
    </Container>
  )
}

export default UnderDevelopment
