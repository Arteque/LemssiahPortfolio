import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import { buttonVariants } from "./Assets/Button"
import { FC, useState } from "react"
import { cn } from "../libs/utils"
import { cva, VariantProps } from "class-variance-authority"


const mainNavVariants = cva(
    " md:flex md:items-center md:justify-center md:gap-2 md:bg-[unset] md:shadow-[none] md:border-none md:relative md:left-auto md:right-auto md:top-auto",
    {
        variants:{
            variant:{
                header: "absolute top-[100%] right-2 left-[25svw] bg-bg py-5 z-[999] rounded-lg shadow-lg border border-bg-100 md:flex md:items-center md:justify-center md:gap-2 md:bg-[unset] md:shadow-[none] md:border-none md:relative md:left-auto md:right-auto md:top-auto transition-all duration-100",
                footer: "m-0 p-0 mx-5 md:list-none md:flex md:gap-2 md:justify-center md:items-center py-5"
            }
        },
        defaultVariants:{
            variant:"header"
        }
    }
)

interface NavProps extends VariantProps<typeof mainNavVariants>{
    className?:string,
}



const MainNav : FC<NavProps>= ({className, variant, ...props}) => {


    const [navState, setNavState] = useState(false)

    const changeNavState = () => {
        setNavState(prev => !prev)
        document.body.dataset.nav = navState ? "close" : "open" 
    }

  return (
    <nav className={`main-nav ${className}`}>
        {
            variant == "header" && (
            <div className="burger md:hidden h-fit" onClick={changeNavState}> 
                {
                    navState ? (
                        <FontAwesomeIcon icon={faTimes} className="size-8 text-prime p-0 m-0 block py-5 pr-3"/> 
                    ): (
                        <FontAwesomeIcon icon={faBars} className="size-8 text-prime p-0 m-0 block py-5 pr-3"/> 
                    )
                }
            </div>)
        }
        {
            variant == 'header' ? (
                <ul className={`${cn(mainNavVariants({variant}))} ${navState ? "opacity-1 pointer-events-auto":"opacity-0 pointer-events-none"}`} {...props}>
                    <li>
                        <NavLink to="/" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            Start
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/uebermich" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            &Uuml;ber mich
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leistungen" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            Leistungen
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            Portfolio
                        </NavLink>
                    </li>
                </ul>
            ):(
                <ul className={`${cn(mainNavVariants({variant}))} "}`} {...props}>
                    <li>
                        <NavLink to="/" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            Start
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/uebermich" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leistungen" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={`${buttonVariants({variant:"default"})} block text-center w-full m-0`} {...props}> 
                            Portfolio
                        </NavLink>
                    </li>
                </ul>
            )
        }
    </nav>
  )
}

export default MainNav