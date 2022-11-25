import React from 'react'
import dynamic from 'next/dynamic'

const MediaPlayer = dynamic(
  () => import('@components/molecules/media-player/MediaPlayer'),
  { ssr: false },
)

interface Props {
  url?: string
  light?: string
}

const RenderVideoPlayerCar: React.FC<Props> = props => {
  const { url, light } = props

  return <MediaPlayer url={url} light={light} />
}

export default RenderVideoPlayerCar
