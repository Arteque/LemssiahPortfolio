
import Markdown from "react-markdown"
import Container from './Container'
import {FC} from "react"
import { buttonVariants } from "./Assets/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { cn } from "../libs/utils"

interface detailsProps {
  projectPath:string,
  closeDetailsContainer:() => void
}


const markdownBlankLink =  (props:any) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer nofollow">
      {props.children}
    </a>
  )
}




const Details:FC<detailsProps> = ({projectPath,closeDetailsContainer}) => {  



  return (
    <Container className="
          project-details 
          fixed 
          top-0
          left-0
          right-0
          bottom-0
          overflow-y-auto
          z-[999999] 
          backdrop-blur-2xl
          ">
          <button className={cn(`${buttonVariants({variant:"rounded"})}
          sticky top-0 right-0
          `)}
          onClick={closeDetailsContainer}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="
          project-container 
          md:max-w-[70vw] 
          min-h-full 
          bg-bg 
          mx-auto
          p-5
          ">
            <Markdown
            components={{a:markdownBlankLink}}
            >
              {projectPath}
            </Markdown>
          </div>
       
    </Container>
  )
}

export default Details