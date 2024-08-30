import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "./Header"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import Socials from "./Socials"
import Container from "./Container"
import Logo from "./Logo"
import MainNav from "./MainNav"
import { FC } from "react"

interface MainHeaderProps{
  toggleForm: any
}

const MainHeader: FC<MainHeaderProps> = ({toggleForm}) => {
  return (
    <Header className="relative md:sticky top-0 md:w-full backdrop-blur-lg">
        <div className="flex justify-between items-center p-3 m-3">
          <button className="flex gap-2 items-center font-bold">
            <FontAwesomeIcon icon={faMoon} />
            <span>Darkmode</span>
          </button>
          <Socials />
        </div>
        <Container>
          <div className="w-full flex justify-between rounded-lg bg-bg overflow-hidden">
              <Logo />
              <MainNav variant="header"/>
              <button className="hidden md:block w-fit p-2 px-4 bg-second text-bg rounded-sm font-bold uppercase hover:bg-second-100 hover:text-prime transition-all duration-[.3] ease-in-out"
                onClick={toggleForm}
              >Kontakt</button>
          </div>
        </Container>
      </Header>
  )
}

export default MainHeader