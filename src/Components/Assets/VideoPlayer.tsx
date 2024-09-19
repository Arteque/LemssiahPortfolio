import { FC } from "react"
import ReactPlayer from "react-player"

interface videoPlayerProps{
    videoUrl ?: string
}

const VideoPlayer:FC<videoPlayerProps> = ({videoUrl}) => {
  return (
    <ReactPlayer url={videoUrl} width="80%" height="80%" config={{
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
