import { FC } from "react"
import ReactPlayer from "react-player"

interface videoPlayerProps{
    videoUrl ?: string
}

const VideoPlayer:FC<videoPlayerProps> = ({videoUrl}) => {
  return (
    <ReactPlayer url={videoUrl} width="70%" height="100%" style={{maxWidth:"1400px", maxHeight:"800px"}}config={{
        youtube:{
            playerVars:{
                showinfo:0,
                modestbranding:0,
                autoplay:1
            },
            embedOptions:{AbortController}
        }
    }}/>
  )
}

export default VideoPlayer
