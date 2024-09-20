import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./Card"
import { faGlobeAfrica, faSave, faShareAlt, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./Button"
import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons"
import { FC } from "react"

interface projectCardProps{
  title?:string,
  location?:string,
  date?:string
}

const ProjectCard:FC<projectCardProps> = ({title, location, date}) => {
  return (
    <Card variant="mediaCard" className="project relative group cursor-pointer  overflow-hidden bg-bg my-5 
    shadow-sm shadow-prime-200 group-hover:shadow-lg ">
      <div className="card__header overflow-hidden">
          <img src="./Projects/DefaultThumb.jpg" alt="DefaultThumb" className="
          transition-all duration-[5s] grayscale
          group-hover:scale-[1.01] group-hover:grayscale-0"/>
      </div>
      <div className="card__body">
        <h3 className="text-prime text-lg flex gap-2 pt-5 px-3">
          <a href="#" title="project-title">
            <span className="card__icon">
              <FontAwesomeIcon icon={faGlobeAfrica} />
            </span>
            <span className="card__text">
            {title} |
            <span  className="text-text-200 text-xs"> 
            <small>{location}</small> - <small>{date}</small>
            </span>
            </span>
          </a>
        </h3>
        <h4 className="px-3 text-xs text-text-200">
          <span>100 Views</span> | <span>10 Likes</span>
        </h4>
        <p className="card__description p-5 text-prime">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam amet vitae, esse expedita eaque eius ducimus aspernatur sunt? Soluta.
        </p>
      </div>
      <div className="card__footer">
        <ul className='absolute flex flex-col gap-2 top-2 right-[-20%] transition-all duration-[.5s]
        group-hover:right-0 
        '>
          <li>
            <Button variant="roundedLight">
                <FontAwesomeIcon icon={faThumbsUp}  />
            </Button>
          </li>
          <li>
            <Button variant="roundedLight">
                <FontAwesomeIcon icon={faThumbsDown}  />
            </Button>
          </li>
          <li>
            <Button variant="roundedLight">
                <FontAwesomeIcon icon={faShareAlt}  />
            </Button>
          </li>
          <li>
            <Button variant="roundedLight">
                <FontAwesomeIcon icon={faSave}  />
            </Button>
          </li>
        </ul>
        <ul className="card__tek flex justify-end p-2 gap-1 text-text-100">
          <li>
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3} />
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} />
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} />
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default ProjectCard