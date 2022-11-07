import * as React from 'react'
import { IoIosArrowDropup } from 'react-icons/io'
import { Button, ButtonProps, Text } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { colors } from '@components/global/Theme'
import style from '@styles/ScrollToTop.module.css'
import { useColorMode } from '@chakra-ui/react'

const ScrollToTop: React.FC<ButtonProps> = props => {
  const { locale } = useRouter()
  const [showScroll, setShowScroll] = React.useState<Boolean>(false)
  const { colorMode } = useColorMode()

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Button
        rightIcon={
          <IoIosArrowDropup
            size={18}
            color={
              colorMode === 'light' ? colors.white.main : colors.black.main
            }
          />
        }
        bg={colorMode === 'light' ? colors.darkGradient : colors.whiteGradient}
        onClick={scrollTop}
        position="fixed"
        className={style.scrollToTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
        size="xs"
        {...props}
      >
        <Text
          color={colorMode === 'light' ? colors.white.main : colors.black.main}
        >
          {localize(locale, 'goTop')}
        </Text>
      </Button>
    </>
  )
}

export default ScrollToTop
