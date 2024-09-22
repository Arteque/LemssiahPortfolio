
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
          top-1
          left-1
          right-1
          bottom-1
          overflow-y-auto
          rounded-sm  
          z-[999999] 
          backdrop-blur-lg
          md:top-10 md:right-10 md:left-10 md:bottom-10 ">
          <button className={cn(`${buttonVariants({variant:"rounded"})}
          fixed top-0 right-0
          `)}
          onClick={closeDetailsContainer}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="
          project-container 
          md:max-w-[50vw] 
          min-h-full 
          bg-bg 
          mx-auto
          p-5
          ">
            <Markdown className="
            w-full
            prose 
            prose-h1:font-black 
            prose-h1:text-second
            prose-h2:text-prime
            prose-h3:text-second
            prose-h3:mt-10
            prose-h3:font-light
            prose-h3:text-2xl
            prose-h4:text-xl
            prose-h4:text-bg-200
            prose-h5:text-bg-200
            prose-h6:text-bg-200
            prose-ul:text-prime
            prose-li:text-prime
            prose-p:text-prime
            prose-p:w-full
            prose-a:text-prime
            prose-strong:text-prime
            prose-code:text-prime
            prose-code:font-bold
            prose-code:border
            prose-code:border-bg-100
            prose-img:block
            prose-img:w-full
            prose-img:margin-x-auto
            "
            components={{a:markdownBlankLink}}
            >
              {projectPath}
            </Markdown>
          </div>
       
    </Container>
  )
}

export default Details