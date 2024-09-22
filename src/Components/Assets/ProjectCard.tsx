import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./Card"
import { faCalendarAlt,  faExternalLink, faGlobe,  faLink } from "@fortawesome/free-solid-svg-icons"
import { buttonVariants } from "./Button"
import { FC, useState } from "react"
import { cn } from "../../libs/utils"
import { Link } from "react-router-dom"
import Details from "../Details"

interface projectCardProps{
  title?:string,
  screenshot:string,
  screenshottype:string,
  location?:string,
  date?:string
  description?:string,
  type?:string,
  project?:string,
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
  description,
  teks,
  type, 
  project,
  screenshot,
  screenshottype
}) => {


  const [mdContent, setMdContent] = useState('')


  const openProject = async (e:any) => {
    e.preventDefault()
    console.log(e.target.dataset.path)
    import(`../../Data/Projects/${e.target.dataset.path}/de/readme.md`)
    .then(res => res)
    .then(data => setMdContent(data.default))
  }


  

  return (
    <>
    <Card variant="mediaCard" className="project group relative overflow-hidden bg-bg my-5 
    shadow-sm shadow-prime-200 group-hover:shadow-lg ">
      <div className="card__header overflow-hidden">
          {
            screenshot ? (
              <img src={`./Projects/${screenshot}.${screenshottype}`} alt={title} className="
              transition-all duration-[5s] grayscale
              group-hover:scale-[1.01] group-hover:grayscale-0"/>
            ): (
              <img src="./Projects/DefaultThumb.jpg" alt="DefaultThumb" className="
              transition-all duration-[5s] grayscale
              group-hover:scale-[1.01] group-hover:grayscale-0"/>
            )
          }
      </div>
      <div className="card__body">
        <h3 className="text-prime text-lg pt-5 px-3">
          {type && (
            <span className="card__type text-bg-200 text-sm">
             Type: <strong>{type}</strong>
            </span>
          )}
          <Link  to="#" title={title} className=" group/title underline underline-offset-4 flex align-center gap-3">
             <span className="text-bg-200 opacity-75 group/title-hover:opacity-100 pt-2">
                <FontAwesomeIcon icon={faLink} />
             </span> 
            <span className="card__text"> 
             {title}
            </span>
          </Link>
            <span  className="text-text-200 text-xs"> 
              <small  className="inline-flex gap-1 items:center">
                <FontAwesomeIcon icon={faGlobe} className="pt-[3px]" size="lg" /> {location?.toUpperCase()}
                </small> - 
                <small className="inline-flex gap-1 items:center ml-2">
                  <FontAwesomeIcon icon={faCalendarAlt} size="lg" className="pt-[2px]" />
                  {date}
                </small>
            </span>
        </h3>
        {/*
        <h4 className="px-3 text-xs text-text-200">
          <span>100 Views</span> | <span>10 Likes</span>
        </h4>
        */}
        <p className="card__description p-5 text-prime">
          {description}
        </p>
      </div>
      <div className="card__footer">

        <ul className="card__tek flex w-full p-2 gap-1 text-text-100">
            <li className="self-start">
              <Link to="#" className={`${buttonVariants({variant:"rounded"})}`}
                title={`Projekt: "${title}" öffnen`}
                data-path={project}
                onClick={openProject}
              >
                  <FontAwesomeIcon icon={faExternalLink} className="pointer-events-none"/>
              </Link>
            </li>
          {teks &&( teks.map(tek => 
            (
              <li key={tek.id} className={cn(`${buttonVariants({variant:'rounded'})}`)}>
                <img className="w-full h-full block " src={`./Icons/${tek.name}.${tek.iconType}`} alt={tek.name} />
              </li>
            ))
          )}
        </ul>
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