import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Box,
  Flex,
  Text,
  useColorMode,
  IconButton,
  useDisclosure,
  Spacer,
  Divider,
  Kbd,
  Container,
} from '@chakra-ui/react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import Image from 'next/image'
import IdFlag from '@public/assets/images/id.svg'
import EnFlag from '@public/assets/images/en.svg'
import Logo from '@public/assets/images/Daihatsu-Logo.wine.png'
import { colors } from '../Theme'

const MenuItemsButton = dynamic(
  () => import('@components/atoms/buttons/MenuItemsButton'),
  { ssr: false },
)
const RenderDrawer = dynamic(
  () => import('@components/global/header/RenderDrawer'),
  { ssr: false },
)

const Header: React.FC = props => {
  const { locale } = useRouter()
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const Menus = [
    {
      id: 1,
      name: localize(locale, 'gallery'),
      kbd: localize(locale, 'g'),
      url: '/gallery',
    },
    {
      id: 2,
      name: localize(locale, 'contact'),
      kbd: localize(locale, 'c'),
      url: '/contact',
    },
  ]
  const DrawerMenus = [
    {
      id: 1,
      name: localize(locale, 'gallery'),
      kbd: localize(locale, 'g'),
      url: '/',
    },
    {
      id: 2,
      name: localize(locale, 'contact'),
      kbd: localize(locale, 'c'),
      url: '/contact',
    },
  ]

  return (
    <>
      <Flex
        {...props}
        as="header"
        position="fixed"
        zIndex="100"
        w="full"
        justifySelf="center"
        bg={colorMode === 'light' ? colors.whiteGradient : colors.darkGradient}
        color={colorMode === 'light' ? colors.black.light : colors.pinkGradient}
        justifyContent="space-evenly"
        p={{ base: '1rem 0' }}
        pl={{ base: '1rem', xl: '300', lg: '1rem' }}
        pr={{ base: '1rem', xl: '300', lg: '1rem' }}
        boxShadow="2xl"
      >
        <Flex align="center" onClick={() => router.push('/')} cursor="pointer">
          <Image src={Logo} width={150} height={150} alt="logo" />
        </Flex>
        <Spacer />
        <Box
          display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}
          mt={{ base: 4, md: 0 }}
        >
          {Menus.map(menu => (
            <MenuItemsButton
              onClick={() => {
                router.push(menu.url)
              }}
              key={menu.id}
            >
              <Text fontSize="md">{menu.name}</Text>
            </MenuItemsButton>
          ))}
        </Box>
        <Spacer />
        {/* mode */}
        <Box
          display={{ base: 'none', md: 'flex' }}
          mt={{ base: 4, md: 0 }}
          alignContent="center"
        >
          <IconButton
            size="xs"
            bg="transparent"
            icon={
              colorMode === 'light' ? <BiMoon size={25} /> : <BiSun size={25} />
            }
            onClick={toggleColorMode}
            aria-label="button"
          />
        </Box>
        <Box display={{ base: 'block', md: 'none', lg: 'none' }}>
          <IconButton
            size="xs"
            bg="transparent"
            icon={
              colorMode === 'light' ? <BiMoon size={25} /> : <BiSun size={25} />
            }
            onClick={toggleColorMode}
            aria-label="button"
          />
        </Box>

        {/* flag */}
        <Box ml={{ base: '3' }} mr={{ base: '3', xl: '0', lg: '3' }}>
          {router.locale == 'en' ? (
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query },
              }}
              replace={true}
              locale="id"
            >
              <IconButton size="xs" bg="transparent" aria-label="button">
                <Image alt="Id Flag" src={IdFlag} />
              </IconButton>
            </Link>
          ) : router.locale == 'id' ? (
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query },
              }}
              replace={true}
              locale="en"
            >
              <IconButton size="xs" bg="transparent" aria-label="button">
                <Image layout="fill" alt="Id Flag" src={EnFlag} />
              </IconButton>
            </Link>
          ) : null}
        </Box>
        {/* burger button shows when lg */}
        <IconButton
          aria-label="button"
          size="xs"
          bg="transparent"
          onClick={onOpen}
          display={{ base: 'block', xl: 'none', lg: 'block' }}
          p={0}
        >
          <GiHamburgerMenu size={20} />
        </IconButton>
      </Flex>

      {/* drawer */}
      <RenderDrawer
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={firstField}
        bg={colorMode === 'dark' ? colors.darkGradient : colors.whiteGradient}
        color={colorMode === 'dark' ? colors.white.main : colors.black.main}
        placement="top"
      >
        {DrawerMenus.map(data => (
          <Container key={data.id}>
            <Flex w="full" justifyContent="space-between" alignItems="center">
              <Box>
                <IconButton
                  aria-label="button"
                  size="xs"
                  bg="transparent"
                  display={{ base: 'block', xl: 'none', lg: 'block' }}
                  p={0}
                  onClick={onClose}
                >
                  <Text
                    onClick={() => {
                      router.push(data.url)
                    }}
                    fontSize="sm"
                    paddingX="1"
                    fontWeight="bold"
                  >
                    {data.name}
                  </Text>
                </IconButton>
              </Box>
              <Box>
                <Kbd>{data.kbd}</Kbd>
              </Box>
            </Flex>
            <Divider />
          </Container>
        ))}
      </RenderDrawer>
    </>
  )
}

export default Header
