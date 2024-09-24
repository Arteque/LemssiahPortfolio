import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./Card"
import { faCalendarAlt,  faExternalLink, faGlobe,  faLink } from "@fortawesome/free-solid-svg-icons"
import { FC, useState } from "react"
import { Link } from "react-router-dom"
import Details from "../Details"
import Tag from "./Tag"

interface projectCardProps{
  title?:string,
  screenshot:string,
  screenshottype:string,
  location?:string,
  date?:string
  type?:string,
  project?:string,
  projektFolder?:string,
  teks?: projectTeks[]
}

interface projectTeks{
    id?:string,
    name?:string,
    icon?:string,
    iconType?:string
}
const ProjectCard:FC<projectCardProps> = ({
  title, 
  location, 
  date, 
  teks,
  type, 
  project,
  screenshot,
  screenshottype,
  projektFolder
}) => {


  const [mdContent, setMdContent] = useState('')


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openProject = async (e:any) => {
    e.preventDefault()
    console.log(e.target)
    const path = await e.target.dataset.path
    import(`../../Data/Projects/${path}/de/readme.md`)
    .then(res => res)
    .then(data => setMdContent(data.default))
  }


     

  return (
    <>
    <Card variant="mediaCard" className="
    project group relative overflow-hidden bg-bg my-5 
    shadow-sm shadow-prime-200 hover:shadow-lg transition-all">
      <div className="card__header overflow-hidden">
          {
            screenshot ? (
              <img src={`./Projects/${projektFolder}/${screenshot}.${screenshottype}`} alt={title} />
            ): (
              <img src="./Projects/DefaultThumb.jpg" alt="DefaultThumb" />
            )
          }
      </div>
      <div className="card__body">
        <h3 className="text-prime text-lg ">
          {type && (
            <span className="card__type text-bg-200 text-sm  px-3" >
             Type: <strong>{type}</strong>
            </span>
          )}
          <Link to="#"  className="flex gap-2 items-center p-2
          hover:bg-bg-100 transition-all
          "
          title={`Projekt: "${title}" öffnen`}
          data-path={project}
          onClick={openProject}
        >
            <span className="text-bg-200 pointer-events-none">
              <FontAwesomeIcon icon={faLink} />
            </span> 
            <span className="card__text pointer-events-none"> 
             {title}
            </span>
            <FontAwesomeIcon icon={faExternalLink} className="pointer-events-none block text-bg-200" size="sm"/>
        </Link> 
        </h3>
        <p className="pb-2">
        <span  className="text-text-200 text-xs px-2"> 
          <small  className="inline-flex gap-1 items:center">
            <FontAwesomeIcon icon={faGlobe} className="pt-[3px]" size="lg" /> {location?.toUpperCase()}
            </small> - 
            <small className="inline-flex gap-1 items:center ml-2">
              <FontAwesomeIcon icon={faCalendarAlt} size="lg" className="pt-[2px]" />
              {date}
            </small>
          </span>
        </p>
      </div>
      <div className="card__footer">
         <div className="features-container bg-[#bbb] p-2 flex justify-between gap-2">
        <div className="tools-container w-5 h-5 opacity-50">
        <img src="./Icons/Tools.svg" alt="" />
        </div>
        <div className="item-container flex gap-2">
          {teks &&( teks.map(tek => 
              (
                <Tag key={tek.id}>
                  <img className="w-full h-full block " src={`./Icons/${tek.name}.${tek.iconType}`} alt={tek.name} />
                </Tag>
              ))
            )}
        </div>
        </div>
       
      </div>
    </Card>
    {
      mdContent !== '' ? (
        <>
            <Details projectPath={mdContent} closeDetailsContainer={() => {setMdContent('')}}/>
        </>
      ):(
        <></>
      )
    }
    </>
  )
}

export default ProjectCard