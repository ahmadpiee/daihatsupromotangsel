import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { CurrencyIDR, localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

export interface ProductCardProps {
  src?: string
  productName?: string
  price?: number
  otr?: string
  key?: any
  slug?: any
}

const Placeholder =
  'https://res.cloudinary.com/dytnna6mc/image/upload/v1668941208/nampak_depan_48051bc8e2.png?updated_at=2022-11-20T10:48:02.536Z'

const ProductCard: React.FC<ProductCardProps> = props => {
  const {
    src = Placeholder,
    productName = 'Daihatsu Terios',
    price = 280000000,
    otr = 'Tangerang Selatan',
    key,
    slug,
  } = props

  const { locale } = useRouter()
  const router = useRouter()

  return (
    <CardContainer key={key} style={{ padding: '0.5rem', marginTop: '1rem' }}>
      <Card maxW="lg" borderRadius="md" marginRight="4px" boxShadow="lg">
        <CardBody>
          <Zoom>
            <Image
              draggable={false}
              objectFit="contain"
              src={src}
              alt="product images"
            />
          </Zoom>
          <Stack mt="5" spacing="2">
            <Heading textTransform="capitalize" size="md">
              {productName}
            </Heading>
            <Text color="blue.600" fontSize="lg" fontWeight={600}>
              Rp {CurrencyIDR.format(price)}
            </Text>
            <Text textTransform="capitalize" fontSize="md">
              {localize(locale, 'otrPrice')} {otr}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              textTransform="capitalize"
              variant="link"
              colorScheme="blue"
              aria-label="detail-produk"
              onClick={() => router.push(`/products/${slug}`)}
            >
              {localize(locale, 'productDetails')}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </CardContainer>
  )
}

export default ProductCard

const CardContainer = styled.div`
  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    :hover {
      transform: scale(1.05);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 1);
    }
    transition: all 0.35s ease-in-out;
  }
`
