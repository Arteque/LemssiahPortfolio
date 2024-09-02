import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import { buttonVariants } from "./Assets/Button"
import { FC, useState } from "react"
import { cn } from "../libs/utils"
import { cva, VariantProps } from "class-variance-authority"


const mainNavVariants = cva(
    "md:flex md:items-center md:justify-center md:gap-2 md:bg-[unset] md:shadow-[none] md:border-none md:relative md:left-auto md:right-auto md:top-auto",
    {
        variants:{
            variant:{
                header: "absolute top-[100%] right-2 left-[25svw] bg-bg py-5 z-[999] rounded-lg shadow-lg border border-bg-100 md:flex md:items-center md:justify-center md:gap-2 md:bg-[unset] md:shadow-[none] md:border-none md:relative md:left-auto md:right-auto md:top-auto transition-all duration-100",
                footer: "list-disc m-0 p-0 mx-5 md:list-none md:flex md:gap-2 md:justify-center md:items-center py-5"
            }
        },
        defaultVariants:{
            variant:"header"
        }
    }
)

interface NavProps extends  VariantProps<typeof mainNavVariants> {
    variant:any,
}



const MainNav : FC<NavProps>= ({variant, ...props}) => {


    const [navState, setNavState] = useState(false)

    const changeNavState = () => {
        setNavState(prev => !prev)
    }

  return (
    <nav className="main-nav">
        {
            variant == "header" && (
            <div className="burger md:hidden h-fit" onClick={changeNavState}> 
                <FontAwesomeIcon icon={faBars} className=" size-8  text-prime p-0 m-0 block py-5 pr-3"/> 
            </div>)
        }
        <ul className={`${cn(mainNavVariants({variant}))} ${navState ? "opacity-1 pointer-events-auto":"opacity-0 pointer-events-none"}`} {...props}>
            <li>
                <NavLink to="/" className={`${buttonVariants({variant:"default"})} `} {...props}> 
                    Start
                </NavLink>
            </li>
            <li>
                <NavLink to="/uebermich" className={`${buttonVariants({variant:"default"})}`} {...props}> 
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/leistungen" className={`${buttonVariants({variant:"default"})}`} {...props}> 
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" className={`${buttonVariants({variant:"default"})}`} {...props}> 
                    Portfolio
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default MainNav