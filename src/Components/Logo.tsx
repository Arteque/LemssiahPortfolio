import { FC } from "react"

interface logoProps{
  className?:string,
  isHeader:boolean
}

const Logo:FC<logoProps> = ({className, isHeader}) => {
  return(
    isHeader ? (
      <div className={`logo flex gap-2 items-center p-4 ${className}`}>
          <img className="logo__image block w-[40px] md:w-auto" src="./logo.svg" alt="Ahmed Lemssiah Logo" style={{maxWidth:"50px"}}/>
          <h1 className="logo__content font-bold hidden md:block">
              <span className="block uppercase whitespace-nowrap text-prime font-title ">Ahmed Lemssiah</span>
              <span className="text-second font-text whitespace-nowrap">Web Designer</span>
          </h1>
      </div>
    ):(
      <div className={`logo flex gap-2 items-center p-4 mx-auto w-fit md:mx-0${className}`}>
          <img className="logo__image block w-[40px] md:w-auto" src="./logo.svg" alt="Ahmed Lemssiah Logo" style={{maxWidth:"50px"}}/>
          <h2 className="logo__content font-bold block">
              <span className="block uppercase whitespace-nowrap text-prime font-title ">Ahmed Lemssiah</span>
              <span className="text-second font-text whitespace-nowrap">Web Designer</span>
          </h2>
      </div>
    )
  )
}

export default Logo