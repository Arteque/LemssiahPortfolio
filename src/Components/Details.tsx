import ReactMarkdown from 'react-markdown'
import readme from "../Data/Projects/dictionary-api/readme.md"
import Container from './Container'



const Details = () => {


  return (
    <Container className="project-details fixed top-3 right-3 left-3 bottom-3 bg-bg text-prime p-10 rounded-sm overflow-y-auto z-[999999]">
       
          <ReactMarkdown className="
          prose 
          prose-*:text-prime
          prose-h1:font-black 
          prose-h1:text-prime
          prose-ul:text-prime
          prose-li:text-prime
          ">
            {readme}
          </ReactMarkdown>
       
    </Container>
  )
}

export default Details