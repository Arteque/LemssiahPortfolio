import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"

const ProjectSingle = () => {

    const file_name = "dictionary-api"
    const [post, setPost] = useState("")


    useEffect(() => {
        import(`../../Data/Projects/${file_name}/readme.md`)
        .then(res => {
            fetch(res.default)
            .then(res => res.text())
            .then(res => setPost(res))
        })
        .catch(err => console.log(err))
    },[])

  return (
    <>
        <Markdown>
            {post}
        </Markdown>
    </>
  )
}

export default ProjectSingle
