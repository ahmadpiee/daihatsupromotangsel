import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'

import React, { useState, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

const Placeholder =
  'https://res.cloudinary.com/dytnna6mc/image/upload/v1669043481/web_banner_b0b03d8ab7.png?updated_at=2022-11-21T15:11:21.617Z'

const ImageContainer = styled.div`
  z-index: 0;
  top: 0;
`

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export interface AppBackgroundImageProps extends ImageProps {
  components?: any
  zIndex?: number
  left?: number
  right?: number
  top?: number
  bottom?: number
  position?: any
  margin?: any
  padding?: any
  zoom?: number
  componentborderradius?: number | string
}

const AppImageBackground: React.FC<AppBackgroundImageProps> = props => {
  const {
    components,
    zIndex = 1,
    left,
    right,
    top,
    bottom,
    position,
    margin,
    padding,
    zoom = 0,
    componentborderradius = '10px',
  } = props

  const [width, setWidth] = useState<number>()
  const [height, setheight] = useState<number>()

  useEffect(() => {
    const { width, height } = getWindowDimensions()

    setWidth(width)

    setheight(height)
  }, [])

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions()

      setWidth(width)

      setheight(height)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width && height) {
    return (
      <ImageContainer>
        <Box
          zIndex={zIndex}
          left={left}
          right={right}
          top={top}
          bottom={bottom}
          pos={position}
          m={margin}
          p={padding}
          borderRadius={0}
          overflow="hidden"
          maxW="full"
        >
          {components ? components : null}
        </Box>
        {zoom === 1 ? (
          <Zoom>
            <Box borderRadius={componentborderradius} overflow="hidden">
              <Image
                alt="daihatsu bg-img"
                src={Placeholder}
                width={width}
                height={height}
                {...props}
              />
            </Box>
          </Zoom>
        ) : (
          <Box borderRadius={componentborderradius} overflow="hidden">
            <Image
              alt="daihatsu bg-img"
              src={Placeholder}
              width={width}
              height={height}
              {...props}
            />
          </Box>
        )}
      </ImageContainer>
    )
  }
  return null
}

export default AppImageBackground
