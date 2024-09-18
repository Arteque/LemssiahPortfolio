
import Markdown from "react-markdown"
import Container from './Container'
import {FC, useEffect} from "react"

interface detailsProps {
  projectPath:string
}

const Details:FC<detailsProps> = ({projectPath}) => {  


useEffect(() => {
  
},[])

  return (
    <Container className="project-details fixed top-10 right-10 left-10 bottom-10 rounded-sm overflow-y-auto z-[999999] backdrop-blur-lg">

          <div className="
          project-container 
          max-w-[50vw] 
          min-h-full 
          bg-bg 
          mx-auto
          p-5
          ">
            <Markdown className="
            prose 
            prose-h1:font-black 
            prose-h1:text-second
            prose-h2:text-prime
            prose-h3:text-second
            prose-h3:mt-10
            prose-h3:font-light
            prose-h3:text-2xl
            prose-ul:text-prime
            prose-li:text-prime
            prose-p:text-prime
            prose-a:text-prime
            ">
              {projectPath}
            </Markdown>
          </div>
       
    </Container>
  )
}

export default Details