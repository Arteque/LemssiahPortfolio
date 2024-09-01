import Header from "./Header"
import Socials from "./Socials"
import Container from "./Container"
import Logo from "./Logo"
import MainNav from "./MainNav"
import { FC } from "react"
import ColorMode from "./ColorMode"
import { useState, useEffect } from "react"

interface MainHeaderProps{
  toggleForm: () => void
}





const MainHeader: FC<MainHeaderProps> = ({toggleForm}) => {

  const [darkModeState, setDarkModeState] = useState(false)

  const switchMode = () => {
    setDarkModeState(prev => !prev)
  }



  return (
    <Header variant="default" className="relative md:sticky top-0 md:w-full backdrop-blur-lg z-[999999]">
        <div className="flex justify-between items-center py-3 ">
          <ColorMode isDark={switchMode}/>
          <Socials />
        </div>
        <Container>
          <div className="w-full flex justify-between rounded-lg bg-bg overflow-hidden dark:bg-prime-100">
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