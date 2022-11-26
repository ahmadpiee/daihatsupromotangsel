import React from 'react'
import { AspectRatio, Heading, Stack } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'

const Location: React.FC = () => {
  const { locale } = useRouter()
  return (
    <>
      <Heading
        fontSize="2xl"
        textAlign="center"
        mb={{ base: '2rem' }}
        mt={{ base: '4rem' }}
      >
        {localize(locale, 'location')}
      </Heading>
      <Stack
        justifyContent="center"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
      >
        <AspectRatio ratio={14 / 6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0102512561652!2d106.65166535099519!3d-6.2623790954449206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e4dd7ea90c7f%3A0x841fb079270ad8e0!2sAlam%20Sutera!5e0!3m2!1sen!2sid!4v1669475653455!5m2!1sen!2sid"
            loading="lazy"
          />
        </AspectRatio>
      </Stack>
    </>
  )
}

export default Location
