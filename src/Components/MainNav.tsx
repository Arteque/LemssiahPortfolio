import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import { buttonVariants } from "./Assets/Button"

function MainNav() {
  return (
    <nav className="main-nav">
        <div className="burger *: md:hidden">
        <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="absolute top-[100%] right-2 left-[25svw] bg-bg py-5 z-[999]
        rounded-lg shadow-lg border border-bg-100
        md:flex md:items-center md:justify-center md:gap-2 md:bg-[unset] md:shadow-[none] md:border-none md:relative
        md:left-auto md:right-auto md:top-auto
        ">
            <li>
                <NavLink to="/" className={`${buttonVariants({variant:"default"})}`}> 
                    Start
                </NavLink>
            </li>
            <li>
                <NavLink to="/uebermich" className={`${buttonVariants({variant:"default"})}`}> 
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/leistungen" className={`${buttonVariants({variant:"default"})}`}> 
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" className={`${buttonVariants({variant:"default"})}`}> 
                    Portfolio
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default MainNav