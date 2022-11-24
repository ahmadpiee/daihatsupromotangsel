import React from 'react'
import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy'

const MediaPlayer: React.FC<ReactPlayerProps> = props => {
  const { url, light } = props
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      <ReactPlayer
        style={{ position: 'absolute', top: 0, left: 0 }}
        height="100%"
        width="100%"
        controls={true}
        playing={true}
        loop={false}
        url={url}
        light={light}
        {...props}
      />
    </div>
  )
}

export default MediaPlayer
